namespace js todos

struct Name {
  1: optional string name;
}

struct Greeting {
  1: optional string message;
}

service TodoService {
  Greeting hello(
    1: optional Name name,
  )
}