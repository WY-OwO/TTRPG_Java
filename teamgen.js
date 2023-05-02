function generate_task(){
    result = "<ol>"
    task_data = {
      "action"    : ["clean up (1HP)", "Be on the lookout(1HP) at", "Inspect (2HP)", "Repair (2HP)"],
      "location"  : ["sleeping quarters", "storage", "garden", "kitchen", "bathroom", "garage", "meeting room", "living room", "basement", "engine room", "pipes", "electric system"],
    }
    console.log(task_data)
    for (let i = 0; i < 10; i++){
      result += "<li>" + grammars.GenerationSimple(task_data) + "</li>";
    }
    result += "</ol>";
    console.log(result)
    io.write_into_element(result, "tasks")
  }