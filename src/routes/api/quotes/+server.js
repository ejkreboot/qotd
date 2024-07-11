import { supabase } from "$lib/supabaseClient";

export async function GET({ url }) {
    const { data } = await supabase.from("quotes")
                        .select()
                        .order('id', { ascending: false })
                        .limit(1)
	return new Response(JSON.stringify(data));
}

