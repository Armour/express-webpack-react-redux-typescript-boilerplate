Create Table tableName (
    id serial primary key,
    fieldName text not null,
    created timestamptz default now()
);

INSERT INTO tableName (fieldName) VALUES ('test data 1');
INSERT INTO tableName (fieldName) VALUES ('test data 2');
