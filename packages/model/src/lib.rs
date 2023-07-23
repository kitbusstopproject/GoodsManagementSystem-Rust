use firestore::FireStoreResource;
use serde::{Deserialize, Serialize};


const NAME_SPACE: &str = "inventory-control-bussropprj/v1";

#[derive(Serialize, Deserialize, Debug, Clone, PartialEq, Eq)]
pub struct Item {
    pub category: String,
    pub item_name: String,
    pub maker: String,
    pub model_number: String,
    pub registered_date: String,
    pub supplier: String,
}

impl FireStoreResource for Item {
    type ParamForPath = String;

    fn path(_: &Self::ParamForPath) -> String {
        format!("{}/items", NAME_SPACE)
    }
}

#[derive(Serialize, Deserialize)]
pub struct LendingItem {
    pub is_lending: bool,
    pub items_id: String,
    pub lending_log_id: String,
}

#[derive(Serialize, Deserialize)]
pub struct LendingLog {
    pub comments: String,
    pub item_id: String,
    pub lending_date: String,
    pub name: String,
}