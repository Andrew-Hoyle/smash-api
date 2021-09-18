import React from 'react';
import {DataGrid, GridColDef, GridValueGetterParams} from '@material-ui/data-grid';

const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 70},
    {field: 'characterName', headerName: 'Character Name', width: 130},
    {field: 'health', headerName: 'Health', width: 130},
    {field: 'attack', headerName: 'Attack', width: 130},
];

const rows = [
    {id: 1, characterName: 'Kirby', health: 100, attack: 50},
    {id: 2, characterName: 'Link', health: 100, attack: 50},
    {id: 3, characterName: 'Luigi', health: 100, attack: 50},
    {id: 4, characterName: 'Pikachu', health: 100, attack: 50},
    {id: 5, characterName: 'Bowser', health: 100, attack: 50},
    {id: 6, characterName: 'Mario', health: 100, attack: 50},
    {id: 7, characterName: 'StarFox', health: 100, attack: 50},
    {id: 8, characterName: 'Donkey Kong', health: 100, attack: 50},
    {id: 9, characterName: 'Dr. Mario', health: 100, attack: 50},
];

export const DataTable = () => {
    return (
        <div style={{ height: 400, width: '100%' }}>
          <h2>Drones In Inventory</h2>
          <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
      );
}