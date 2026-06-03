import supabase from "@/app/supabase";

let id = null;

export async function getProducts() {
  const { data, error } = await supabase.from("products").select("*");


console.log('data', data)
console.log('error', error)
  if (error || !data) {
    return products;
  } else {
    return data;
  }
}

export async function setProducts(total, name, address) {
  const { data, error } = await supabase
    .from("sales")
    .insert({
      total,
      customer_name: name,
      address,
    })
    .select("id")
    .single();

  if (error) {
    return null;
  }

  console.log("ERROR:", error?.name, error?.message, error?.status);
  id = data.id;
  return data.id;
}

export async function setItemsProducts(items) {
  return await supabase.from("sale_items").insert(
    items.map((p) => ({
      sale_id: id,
      code: p.code,
      name: p.name,
      price: p.price,
      quantity: p.quantity,
    })),
  );
}
