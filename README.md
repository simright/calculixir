# simright calculixir

**calculixir is a containerized calculix by simright.**

---

> ## Usage


### **Build docker image from github:**

* build:
``` bash
docker build -t calculixir .
```

* run:
``` bash
docker run -it -v /home/simright/development/calculixir/data:/data calculixir -i /data/simple
```

### **Pull docker image from docker hub:**

* pull:
``` bash
docker pull simright/calculixir
```

* run:
``` bash
docker run -it -v /home/simright/development/calculixir/data:/data simright/calculixir -i /data/simple
```

---

### Enjoy :)
