En esta carpeta se esta implementando el principio de sustitución de liskov
La super clase es Bird y de ella extienden FlyingBirds, el ejemplo se aplica
con clas clases Eagle y Penguin.. ambos son aves pero ambos no vuelan,
Liskon indica que las clases hijas deben comportarse tal como sus padres y no puede quedar ningun método sin implementar
devolver null o error vioola el principio por lo que es necesario crear una clase para las aves que vuelen que extienda de Bird
Eagle extiende de FlyingBirds por y por ende puede ser sustituida por cualquier clase de ave voladora sin que genere error,
Penguin implmenta Bird pero tb implmenta sus metodos propios y entre ellos swin()
