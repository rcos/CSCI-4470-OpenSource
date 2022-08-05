FROM tensorflow/tensorflow:latest
RUN apt update
RUN apt install --yes python3-tk xterm x11-apps qt5-default
RUN apt install --yes vim-gtk3
RUN pip install matplotlib PyQt5
RUN useradd -m -s /bin/bash tensorflow
USER tensorflow
WORKDIR /home/tensorflow
CMD ["bash"]
