function generate_scavenge(){
    result = "<ol>"
    scavenge_data = {
        "sentence":["The scavenger made their way to the city for unknown danger. They discovered two options of the day: <ol>#option1#</ol> <ol>#option2#</ol> What will the scavenger choose?"]
        ,"option1":["#status.a# #location#, which seems to be #monster#."]
        ,"option2":["#status.a# #location#, which seems to be #monster#."]
        ,"status":["raided (0 resource)", "vacant (Lvl 1 resource)", "abandoned (Lvl 2 resources)", "intact (Lvl 3 resources)"]
        ,"location":["gas station", "highway", "office building", "refugee camp", "tennis court", "skateboard area", "alley", "bunker", "storefront", "storage unit", "gym"]
        ,"monster":["peaceful (0 monster)", "unsettling (1 monster)", "dangerous (2 monsters)", "infested (3 monsters)"]
      }
    console.log(scavenge_data)
    for (let i = 0; i < 1; i++){
      result += grammars.GenerationSimple(scavenge_data);
    }
    result += "</ol>";
    console.log(result)
    io.write_into_element(result, "scavenge")
  }