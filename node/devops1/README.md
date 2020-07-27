# Development implements DEVOPS for core_hapi

# Pré requisitos

- instalar o docker independente do seu SO

# Abra seu terminal (linux)

```
$ cd devops
```

```
npm run build-image
```
este comando é para criar a imagem do docker


```
npm run up
```
este comando é para subir a imagem num container (core-hapi)

# Se tudo correu bem

```
npm run bash
```
este comando fará com que seu terminal entre dentro do terminal do container

# Finalmente execute isto dentro do container

```
npm install
```

```
npm run dev
```



