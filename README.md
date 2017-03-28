# simright calculixir
## calculixir is a containerized calculix by simright.

> HOW TO USE

build:
``` bash
docker build -t calculixir .
```

run:
``` bash
docker run --rm -v data:/data calculixir data/ample
```

> attach into container for test:

* remove ENTRYPOINT at Dockerfile

build:
``` bash
docker build -t calculixir .
```

run:
``` bash
docker run -idt -v data:/data calculixir
```

attach:
``` bash
docker attach <CONTAINER ID>
```

run calculix at container
``` bash
./calculix_2.11/bin/ccx /data/simple
```

