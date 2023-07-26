use firestore::FireStoreResource;
use serde::{Deserialize, Serialize};


#[derive(Serialize, Deserialize, Debug, Clone, PartialEq, Eq)]
pub struct Date {
    pub nanoseconds: u64,
    pub seconds: u64,
}


#[derive(Serialize, Deserialize, Debug, Clone, PartialEq, Eq)]
pub struct Item {
    pub id: String,
    pub category: String,
    pub is_lending: bool,
    pub item_name: String,
    pub lending_log_id: String,
    pub maker: String,
    pub model_number: String,
    pub registered_date: Date,
    pub supplier: String,
}

impl FireStoreResource for Item {
    type ParamForPath = String;

    fn path(_: &Self::ParamForPath) -> String {
        format!("items")
    }
}


#[derive(Serialize, Deserialize, Debug, Clone, PartialEq, Eq)]
pub struct LendingItem {
    pub is_lending: bool,
    pub items_id: String,
    pub lending_log_id: String,
}

impl FireStoreResource for LendingItem {
    type ParamForPath = String;

    fn path(_: &Self::ParamForPath) -> String {
        format!("lending_items")
    }
}


#[derive(Serialize, Deserialize, Debug, Clone, PartialEq, Eq)]
pub struct LendingLog {
    pub comments: String,
    pub item_id: String,
    pub lending_date: Date,
    pub name: String,
}

impl FireStoreResource for LendingLog {
    type ParamForPath = String;

    fn path(_: &Self::ParamForPath) -> String {
        format!("lending_logs")
    }
}