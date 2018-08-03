namespace js foo

struct Name {
  1: optional string name;
}

struct Greeting {
  1: optional string message;
}

service FooService {
  Greeting hello(
    1: optional Name name,
  )
}