function generate_task(){
    result = "<ol>"
    task_data = {
      "room":["sleeping quarters", "storage", "garden", "kitchen", "bathroom", "garage", "meeting room", "living room", "basement", "engine room", "pipes", "electric system"]
      ,"action":["clean up (1HP)", "watch out (1HP)", "inspection (2HP)", "fixing (2HP)", "bug catching (1HP)", "upgrading (2HP)", "rearranging (1HP)", "paint job (1HP)"]
      ,"origin":["The #room# could use some #action#."]
      }
    console.log(task_data)
    for (let i = 0; i < 10; i++){
      result += "<li>" + grammars.GenerationSimple(task_data) + "</li>";
    }
    result += "</ol>";
    console.log(result)
    io.write_into_element(result, "tasks")
  }