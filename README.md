# node-clean-code
Uso de Clean Code, Solid, TDD y TypeScript en un proyecto de Node


Para crear un proyecto desde cero con Husky, abrir una consola y:
1. Crear una carpeta:
> mkdir [nombre del proyecto]
2. Inicializar git
> git init
3. Inicializar Node
> npm init
4. Iniciar Husky
> npx husky-init && npm install
5. Configurar Husky con lint-staged<br>
a. $ npm i -D lint-staged<br>
b. $ npm set-script prepare "husky install"<br>
c. $ npm run prepare<br>
d. $ nnpx husky add .husky/pre-commit 'npx lint-staged'<br>
e. Abrir VSCode y crear el archivo **.lintstagedrc.json** en la raíz, agregar el siguiente contenido:
```
{
  "*.ts": [
    "eslint 'src/**'"
  ]
}
```
f. Instalar eslint y sus dependencias en desarrollo, instalar:<br>

```
eslint
eslint-config-standard-with-typescript
eslint-plugin-import
eslint-plugin-node
eslint-plugin-promise
eslint-plugin-standard
@typescript-eslint/eslint-plugin
```
g. Para tener un patron de desarrollo en git<br>
```
npm i -D git-commit-msg-linter
```
Y eso sería todo, restaría agregar los modulos que desees para trabajar.

* npm i -D typescript

Comandos útiles de Git.
* Agregar los cambios al commit: git add .
* Crear el commit: git git commit -m"[comando de git-commit-msg-linter] [mensaje]"
* Ver que archivos han cambiado: git status
* Ver cuales son tus commits pendientes por subir: git log


