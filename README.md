# Manifiesto Niños Tagliatella 🍝📱

Web estática, sin frameworks, sin build, sin dependencias. Solo `index.html`, `styles.css` y `script.js`.

## Cómo verla en local
Abre `index.html` directamente en el navegador, o si quieres un servidor local:

```powershell
python -m http.server 8000
# luego visita http://localhost:8000
```

## Cómo publicarla gratis (GitHub Pages) + dominio propio

Coste total: **0€ de hosting** + el precio del dominio `.es` (normalmente 8-12€/año en registradores como Nominalia, Arsys o Namecheap).

### 1. Sube el proyecto a GitHub
1. Crea una cuenta gratuita en https://github.com (si no tienes).
2. Crea un repositorio nuevo público, por ejemplo `manifiesto-ninos-tagliatella`.
3. Sube estos 3 archivos (`index.html`, `styles.css`, `script.js`) al repositorio.
   - Con Git:
     ```powershell
     git init
     git add .
     git commit -m "Primera version del manifiesto"
     git branch -M main
     git remote add origin https://github.com/TU_USUARIO/manifiesto-ninos-tagliatella.git
     git push -u origin main
     ```
   - O simplemente arrastrando los archivos desde la web de GitHub ("Add file" → "Upload files").

### 2. Activa GitHub Pages
1. En el repositorio, ve a **Settings → Pages**.
2. En "Build and deployment", elige **Deploy from a branch**.
3. Selecciona la rama `main` y la carpeta `/ (root)`.
4. Guarda. En 1-2 minutos tendrás la web publicada en:
   `https://TU_USUARIO.github.io/manifiesto-ninos-tagliatella/`

Esto es **100% gratis** y GitHub lo mantiene indefinidamente (incluye HTTPS automático).

### 3. Compra el dominio `manifiestoninostagliatella.es`
1. Ve a un registrador que venda `.es` (Nominalia, Arsys, Namecheap, Dinahosting...).
2. Compra `manifiestoninostagliatella.es` (~8-15€/año, según proveedor).
3. No necesitas contratar hosting con ellos, solo el dominio.

### 4. Conecta el dominio a GitHub Pages
1. En el panel DNS de tu registrador, crea estos registros:
   - Un registro **A** apuntando `@` a las IPs de GitHub Pages:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Un registro **CNAME** para `www` apuntando a `TU_USUARIO.github.io`.
2. En GitHub, ve a **Settings → Pages → Custom domain** y escribe `manifiestoninostagliatella.es`.
3. Marca "Enforce HTTPS" (tarda unos minutos en generarse el certificado).
4. Esto añadirá automáticamente un archivo `CNAME` a tu repo — no lo borres.

La propagación DNS puede tardar entre 10 minutos y 24 horas.

### Alternativas gratis igual de válidas
- **Netlify** o **Vercel**: arrastra la carpeta del proyecto en su web y tienes la página online en segundos, también con dominio propio gratis para el hosting (mismo proceso de DNS).
- **Cloudflare Pages**: igual de gratuito, con CDN incluido.

Cualquiera de las tres opciones (GitHub Pages, Netlify, Vercel) cubre perfectamente una web estática de este tamaño sin coste alguno.
