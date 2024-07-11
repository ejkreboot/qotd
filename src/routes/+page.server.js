import { supabase } from "$lib/supabaseClient";

export async function load({ params }) {
    const { data } = await supabase.from("quotes")
        .select()
        .order('id', { ascending: false })
        .limit(1)
	return {
		quote: data[0]
	};
}