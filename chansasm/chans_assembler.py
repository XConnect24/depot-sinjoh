print("CHANSasm")
print("DO NOT RUN THIS ON A REAL WII, YOU WILL REGRET IT BADLY")
from sys import argv


class Mnenonic:
    def __init__(self, name, byte):
        self.name = name
        self.byte = byte

    def to_bytes(self, args=[]):
        buf = bytearray()
        buf += self.byte
        for i in args:
            buf += args


class MnenonicDB:
    def __init__(self, mnenonics):
        self.mnenonics = mnenonics

    def assemble(line):
        split = line.split(", ")
        inst = split[0]
        args = split[1:]
        for i in mnenonics:
            if inst == i.name:
                return i.to_bytes(inst, args)


insts = []
insts.append(Mnenonic("end", b"\x00"))
insts.append(Mnenonic("ret", b"\x01"))
insts.append(Mnenonic("push", b"\x02"))
insts.append(Mnenonic("pop", b"\x03"))

inst_db = MnenonicDB(insts)
with open(argv[0]) as f:
    with open(argv[1], "wb") as w:
        for i in f:
            w.write(inst_db.assemble(i))
