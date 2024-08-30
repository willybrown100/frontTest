import { supabase } from "./supabase";

export async function getTransaction(){
    
const  { data: transaction, error } = await supabase
  .from('transaction')
  .select('*')
  
  if (error) {
    console.error(error);
  }

  return transaction;
}