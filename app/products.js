import supabase from "@/app/supabase";

let id = null;

export async function getProducts() {
  const { data, error } = await supabase.from("products").select("*");
  console.log("error", error);
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
  await supabase.from("sale_items").insert(
    items.map((p) => ({
      sale_id: id,
      code: p.code,
      name: p.name,
      price: p.price,
      quantity: p.quantity,
    })),
  );
}

export async function showPopularProducts() {
  const { data, error } = await supabase.from("sale_items").select("*");
  if (error || !data) {
    console.log("error al obtener productos populares", error);
  } else {
    return data;
  }
}

export async function searchProducts(text) {
  if (!text || text.trim() === "") {
    return []; 
  }

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .ilike("name", `%${text.trim().toLowerCase()}%`);

  if (error) {
    console.error("Error al buscar productos:", error.message);
    return [];
  }

  return data;
}



