Create Table notes (
    id serial primary key,
    content text not null,
    created timestamptz default now()
);
