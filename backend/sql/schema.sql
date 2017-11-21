Create Table tableName (
    id serial primary key,
    fieldName text not null,
    created timestamptz default now()
);
