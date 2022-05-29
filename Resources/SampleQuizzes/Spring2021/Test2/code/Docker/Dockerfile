FROM python:latest

RUN apt update
RUN apt install --yes git
RUN apt install --yes emacs

# Installing python-pip is optional. 
# The python image already has it.

RUN apt install --yes python-pip

RUN pip install tensorflow
RUN pip install matplotlib

RUN mkdir -p /home/turner

WORKDIR /home/turner

CMD ["bash"]
