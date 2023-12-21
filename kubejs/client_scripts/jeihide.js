// priority: 0

JEIEvents.hideItems(event => {
    // Disabled Items Removal
    let toHide = [
        'crabbersdelight:lanternfish_barrel',
        'aquaculture:neptunium_helmet',
        'aquaculture:neptunium_leggings',
        'aquaculture:neptunium_chestplate',
        'aquaculture:neptunium_boots',
        'aquaculture:neptunium_bow',
        'aquaculture:neptunium_sword',
        'aquaculture:neptunium_axe',
        'aquaculture:neptunes_bounty',
        'aquaculture:wooden_fillet_knife',
        'aquaculture:stone_fillet_knife',
        'aquaculture:iron_fillet_knife',
        'aquaculture:gold_fillet_knife',
        'aquaculture:diamond_fillet_knife',
        'aquaculture:oak_fish_mount',
        'aquaculture:spruce_fish_mount',
        'aquaculture:birch_fish_mount',
        'aquaculture:jungle_fish_mount',
        'aquaculture:acacia_fish_mount',
        'aquaculture:dark_oak_fish_mount',
        'itemfilters:custom', 
        'itemfilters:weak_nbt', 
        'itemfilters:strong_nbt', 
        'itemfilters:max_count', 
        'itemfilters:block', 
        'itemfilters:damage', 
        'itemfilters:id_regex', 
        'itemfilters:always_true', 
        'itemfilters:always_false', 
        'itemfilters:or', 
        'itemfilters:and', 
        'itemfilters:not', 
        'minecraft:debug_stick', 
        'itemfilters:xor', 
        'itemfilters:tag', 
        'itemfilters:mod', 
        'minecraft:structure_void', 
        'minecraft:barrier', 
        'minecraft:light', 
        'minecraft:jigsaw', 
        'minecraft:structure_block',
        'candlelight:tomato_seeds', 
        'candlelight:tomato', 
        'candlelight:lettuce_seeds', 
        'candlelight:lettuce',
        'candlelight:tomato_crate', 
        'candlelight:lettuce_crate',
        'nameless_trinkets:missing_page', 
        'nameless_trinkets:what_magnet', 
        'nameless_trinkets:explosion_proof_jacket', 
        'nameless_trinkets:ghast_eye', 
        'nameless_trinkets:electric_paddle', 
        'nameless_trinkets:sleeping_pills',
        'reliquary:magazines/buster_magazine', 
        'reliquary:magazines/concussive_magazine', 
        'reliquary:magazines/ender_magazine', 
        'reliquary:magazines/blaze_magazine', 
        'reliquary:magazines/exorcism_magazine', 
        'reliquary:magazines/neutral_magazine',
        'reliquary:magazines/empty_magazine', 
        'reliquary:magazines/seeker_magazine', 
        'reliquary:magazines/sand_magazine', 
        'reliquary:magazines/storm_magazine',
        'reliquary:bullets/empty_bullet', 
        'reliquary:bullets/neutral_bullet', 
        'reliquary:bullets/storm_bullet', 
        'reliquary:bullets/sand_bullet', 
        'reliquary:bullets/seeker_bullet', 
        'reliquary:bullets/buster_bullet', 
        'reliquary:bullets/concussive_bullet', 
        'reliquary:bullets/ender_bullet', 
        'reliquary:bullets/blaze_bullet', 
        'reliquary:bullets/exorcism_bullet',
        'structure_gel:yellow_gel', 
        'structure_gel:data_handler', 
        'structure_gel:dynamic_spawner', 
        'structure_gel:building_tool', 
        'structure_gel:red_gel', 
        'structure_gel:blue_gel', 
        'structure_gel:green_gel', 
        'structure_gel:orange_gel', 
        'structure_gel:cyan_gel',
        'nameless_trinkets:four_leaf_clover',
        'reliquary:rending_gale',
        'mysticsbiomes:strawberry',
        'mysticsbiomes:strawberry_jam',
        //'mysticsbiomes:glass_jar',
        'bakery:dough',
        'candlelight:dough',
        'create:dough',
        'farmingforblockheads:feeding_trough',
        'sleep_tight:bedbug_eggs',
        'reliquary:midas_touchstone', 
        'reliquary:pyromancer_staff', 
        'reliquary:rod_of_lyssa',
        'candlelight:carrot_crate', 
        'candlelight:potato_crate', 
        'candlelight:beetroot_crate',
        'extra_compat:reinforced_gold_knife',
    ];
    
    for (const hide of toHide) {
      event.hide(hide);
  }
})
/*
JEIEvents.addItems(event => {
    event.add(Item.of('buildinggadgets2:gadget_building', '{energy:500000,uuid:[I;-263423233,125847530,-2089373063,1330860108]}'))
    event.add(Item.of('buildinggadgets2:gadget_exchanging', '{energy:500000,uuid:[I;2068449905,-191871022,-1763510008,-1044204975]}'))
    event.add(Item.of('buildinggadgets2:gadget_copy_paste', '{energy:1000000}'))
    event.add(Item.of('buildinggadgets2:gadget_cut_paste', '{energy:5000000,pastereplace:1b}'))
    event.add(Item.of('buildinggadgets2:gadget_destruction', '{energy:1000000}'))
})
*/

ClientEvents.onAddItems(event => {
    // Add individual items
    event.addItem('buildinggadgets2:gadget_building', '{energy:500000,uuid:[I;-263423233,125847530,-2089373063,1330860108]}');
    event.addItem('buildinggadgets2:gadget_exchanging', '{energy:500000,uuid:[I;2068449905,-191871022,-1763510008,-1044204975]}');
    event.addItem('buildinggadgets2:gadget_copy_paste', '{energy:1000000}');
    event.addItem('buildinggadgets2:gadget_cut_paste', '{energy:5000000,pastereplace:1b}');
    event.addItem('buildinggadgets2:gadget_destruction', '{energy:1000000}');

    // Add more items as needed
})