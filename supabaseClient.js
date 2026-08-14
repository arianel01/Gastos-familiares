// =========================================================
// ÚNICO ARCHIVO QUE DEBES EDITAR PARA CONECTAR TU PROYECTO
// =========================================================
// 1. Entra a tu proyecto en https://supabase.com
// 2. Ve a: Project Settings > API
// 3. Copia "Project URL" y pégalo en SUPABASE_URL
// 4. Copia "anon public key" y pégalo en SUPABASE_ANON_KEY
// =========================================================

(function () {
const SUPABASE_URL = "https://zzfpyfyvrpomkqnzuaeo.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6ZnB5Znl2cnBvbWtxbnp1YWVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY2NTY5MjMsImV4cCI6MjEwMjIzMjkyM30.WW0Apd8tRfOyBoXira8Ef62xpCUCljtr7WlCd3VmUvo";

window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
})();