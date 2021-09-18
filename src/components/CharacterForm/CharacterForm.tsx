import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseName } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

import { useGetData } from '../../custom-hooks';

interface CharacterFormProps {
    id?:string;
    data?:{}
}

interface CharacterState {
    characterName: string;
}

export const CharacterForm = (props:CharacterFormProps) => {

    const dispatch = useDispatch();
    let {droneData,getData} = useGetData();
    const store = useStore();
    const characterName = useSelector<CharacterState>(state => state.characterName)
    const {register, handleSubmit} = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)

        if ( props.id!){
            server_calls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseName(data.name))
            server_calls.create(store.getState())
            window.location.reload()
        }
    }
    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="Character Name"></label>
                    <Input {...register('name')} name="characterName" placeholder="Character Name" />
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}