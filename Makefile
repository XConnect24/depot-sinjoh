UNAME := $(shell uname)
DO_ERROR := yes
EXE_EXTENSION =
ifeq ($(UNAME), Linux)
  SO := so
  DO_ERROR := no
else
  ifneq (,findstring ($(UNAME), MINGW))
    SO := dll
    DO_ERROR := no
    EXE_EXTENSION = .exe
  endif
  ifneq (,findstring ($(UNAME), Revolution))
    $(error How the heck did you manage to get GNU/Make *and* uname ported to Wii? \(uname result was $(UNAME)\))
  endif
endif
ifeq ($(DO_ERROR), yes)
  $(error Unsupported platform $(UNAME))
endif
LIBS := 
SOS :=
SOURCES :=
OBJS := $(addsuffix .o, $(basename $(notdir $(SOURCES))))
CXXFLAGS :=
%.$(SO):%.so.go
  #go build -go build -buildmode c-shared -o %.so %.so.go
  $(error Broken)
%.a:%.a.go
  $(error TODO)
%.$(SO):%.so.cpp
  $(error TODO)
%.a:%.a.cpp
  $(error TODO)
%.cpp:%.py
  python -m cython %.py --embed 
main$(EXE_EXTENSION):$(LIBS) $(SOS) $(OBJS)
  $(CXX) -o $@ $^ $(CXXFLAGS)
  
  
