ServerEvents.recipes(event => {

    // All Recipe Removal
    let toRemove = [
        //Removed Recipes
        {output: 'aquaculture:neptunium_helmet'},
        {output: 'aquaculture:neptunium_leggings'},
        {output: 'aquaculture:neptunium_chestplate'},
        {output: 'aquaculture:neptunium_boots'},
        {output: 'aquaculture:neptunium_bow'},
        {output: 'aquaculture:neptunium_sword'},
        {output: 'aquaculture:neptunium_axe'},
        {output: 'aquaculture:neptunes_bounty'},
        {output: 'aquaculture:wooden_fillet_knife'},
        {output: 'aquaculture:stone_fillet_knife'},
        {output: 'aquaculture:iron_fillet_knife'},
        {output: 'aquaculture:gold_fillet_knife'},
        {output: 'aquaculture:diamond_fillet_knife'},
        {output: 'aquaculture:oak_fish_mount'},
        {output: 'aquaculture:spruce_fish_mount'},
        {output: 'aquaculture:birch_fish_mount'},
        {output: 'aquaculture:jungle_fish_mount'},
        {output: 'aquaculture:acacia_fish_mount'},
        {output: 'aquaculture:dark_oak_fish_mount'},
        {output: 'nameless_trinkets:missing_page'}, 
        {output: 'nameless_trinkets:what_magnet'}, 
        {output: 'nameless_trinkets:explosion_proof_jacket'}, 
        {output: 'nameless_trinkets:ghast_eye'}, 
        {output: 'nameless_trinkets:electric_paddle'}, 
        {output: 'nameless_trinkets:sleeping_pills'},
        {output: 'reliquary:magazines/buster_magazine'}, 
        {output: 'reliquary:magazines/concussive_magazine'}, 
        {output: 'reliquary:magazines/ender_magazine'}, 
        {output: 'reliquary:magazines/blaze_magazine'}, 
        {output: 'reliquary:magazines/exorcism_magazine'}, 
        {output: 'reliquary:magazines/neutral_magazine'},
        {output: 'reliquary:magazines/empty_magazine'}, 
        {output: 'reliquary:magazines/seeker_magazine'}, 
        {output: 'reliquary:magazines/sand_magazine'}, 
        {output: 'reliquary:magazines/storm_magazine'},
        {output: 'reliquary:bullets/empty_bullet'}, 
        {output: 'reliquary:bullets/neutral_bullet'}, 
        {output: 'reliquary:bullets/storm_bullet'}, 
        {output: 'reliquary:bullets/sand_bullet'}, 
        {output: 'reliquary:bullets/seeker_bullet'}, 
        {output: 'reliquary:bullets/buster_bullet'}, 
        {output: 'reliquary:bullets/concussive_bullet'}, 
        {output: 'reliquary:bullets/ender_bullet'}, 
        {output: 'reliquary:bullets/blaze_bullet'}, 
        {output: 'reliquary:bullets/exorcism_bullet'},
        {output: 'nameless_trinkets:four_leaf_clover'},
        {output: 'reliquary:rending_gale'},
        {output: 'mysticsbiomes:strawberry_jam'},
        {output: 'bakery:dough'},
        {output: 'candlelight:dough'},
        {output: 'create:dough'},
        {output: 'farmingforblockheads:feeding_trough'},
        {output: 'reliquary:midas_touchstone'}, 
        {output: 'reliquary:pyromancer_staff'}, 
        {output: 'reliquary:rod_of_lyssa'},
        {output: 'candlelight:carrot_crate'},
        {output: 'candlelight:potato_crate'},
        {output: 'candlelight:beetroot_crate'}, 
        {output: 'extra_compat:reinforced_gold_knife'},
        {output: 'meadow:climbing_rope_topmount'},
        {output: 'nameless_trinkets:mysterious_trinket'},
        {output: 'herbalbrews:jug'},
        {output: 'forbidden_arcanus:bat_wing'},
        {output: 'plushies:bat_plushie'},
        {output: 'herbalbrews:mixed_tea_leaf_block'},
        {output: 'pipez:energy_pipe'},
        {output: 'pipez:gas_pipe'},
        {output: 'pipez:universal_pipe'},
        {output: 'sophisticatedstorage:feeding_upgrade'},
        {output: 'sophisticatedstorage:advanced_feeding_upgrade'},
        {output: 'sophisticatedstorage:shulker_box'},
        {output: 'sophisticatedstorage:iron_shulker_box'},
        {output: 'sophisticatedstorage:gold_shulker_box'},
        {output: 'sophisticatedstorage:diamond_shulker_box'},
        {output: 'sophisticatedstorage:netherite_shulker_box'},
        {output: 'easy_villagers:converter'},
        {output: 'easy_villagers:iron_farm'},
        {output: 'moblassos:emerald_lasso'},
        {output: 'moblassos:contract'},
        {output: 'easy_mob_farm:poppy_bouquet'},
        {output: 'unusualprehistory:encrusted_flask'},
        {output: 'unusualprehistory:encrusted_organ'},
        {output: 'unusualprehistory:encrusted_sack'},
        {output: 'unusualprehistory:encrusted_spawn_egg'},
        {output: 'galosphere:silver_nugget'},
        {output: 'galosphere:silver_ingot'},
        {output: 'galosphere:raw_silver'},
        {output: 'galosphere:silver_block'},
        {output: 'galosphere:raw_silver_block'},
        {output: 'earthmobsmod:ruby_block'},
        {output: 'ruby_exchange:ruby_ore'},
        {output: 'functionalstorage:armory_cabinet'},
        {output: 'delightful:jelly_bottle'},
        {output: 'delightful:glow_jelly_bottle'},
        {input: 'aquaculture:tuna'},
        {output: 'delightful:blueberry_sack'},
        {output: 'trashcans:energy_trash_can'},
        {output: 'framedblocks:powered_framing_saw'},
        //Replaced Recipes
        {output: 'mighty_mail:post_box'},
        {output: 'farmersdelight:wheat_dough'},
        {output: 'delightful:cheeseburger'},
        {output: 'delightful:deluxe_cheeseburger'},
        {output: 'luphieclutteredmod:luphie_mermaid_pearl'},
        {output: 'meadow:oil_lantern'},
        {output: 'buildinggadgets:template_manager'},
        {output: 'charginggadgets:charging_station'},
        {output: 'beautify:hanging_pot'},
        {output: 'pipez:item_pipe'},
        {output: 'tarotcards:tarot_deck'},
        {mod: 'plushies'},
        {mod: 'perfectplushies'},
        {mod: 'practical_plushies_animals'},
        {mod: 'practical_plushies_mobs'},
        {id: 'forbidden_arcanus:dragon_scale'},
        {id: 'forbidden_arcanus:tyr_helmet'},
        {id: 'forbidden_arcanus:tyr_chestplate'},
        {id: 'forbidden_arcanus:tyr_leggings'},
        {id: 'forbidden_arcanus:tyr_boots'},
        {id: 'forbidden_arcanus:draco_arcanus_helmet'},
        {id: 'forbidden_arcanus:draco_arcanus_chestplate'},
        {id: 'forbidden_arcanus:draco_arcanus_leggings'},
        {id: 'forbidden_arcanus:draco_arcanus_boots'},
        {output: 'unusualprehistory:dna_fridge'}, 
        {output: 'unusualprehistory:incubator'},
        {output: 'unusualprehistory:insulator'},

        
    ];
    
      for (const remove of toRemove) {
        event.remove(remove);
    }

    event.remove({ output: 'minecraft:green_dye', type: 'minecraft:smoking' })
})