import { createClient } from '@supabase/supabase-js';

const URL = 'https://msonbklugaqqdugbwltu.supabase.co';
const API_KEY = 'sb_publishable_Ddnp5B5iOML-tC7Q_RLY8Q_pO1RHFFX';

export const supabase = createClient(URL, API_KEY);