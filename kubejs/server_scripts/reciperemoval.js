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
        {output: 'unusualprehistory:encrusted_flask'},
        {output: 'unusualprehistory:encrusted_organ'},
        {output: 'unusualprehistory:encrusted_sack'},
        {output: 'unusualprehistory:encrusted_spawn_egg'},
        {output: 'galosphere:silver_nugget'},
        {output: 'galosphere:silver_ingot'},
        {output: 'galosphere:raw_silver'},
        {output: 'galosphere:silver_block'},
        {output: 'galosphere:raw_silver_block'},
        {output: 'functionalstorage:armory_cabinet'},
        {output: 'delightful:jelly_bottle'},
        {output: 'delightful:glow_jelly_bottle'},
        {input: 'aquaculture:tuna'},
        {output: 'delightful:blueberry_sack'},
        {output: 'trashcans:energy_trash_can'},
        {output: 'framedblocks:powered_framing_saw'},
        {output: 'unusualfishmod:sea_boom'},
        {output: 'vegandelight:salt'},
        {output: 'reliquary:zombie_heart'},
        {output: 'extra_compat:reinforced_gold_machete'},
        {output: 'sophisticatedbackpacks:inception_upgrade'},
        {output: 'justoutdoorstuffs:garden_lawn_mower'},
        {output: 'justoutdoorstuffs:patio_bbq_grill'},
        {output: 'justoutdoorstuffs:patio_modern_planter_black'},
        {output: 'justoutdoorstuffs:garden_hose'},
        {output: 'justoutdoorstuffs:garden_bag_fertilizers'},
        {output: 'justoutdoorstuffs:patio_modern_planter_white'},
        {output: 'abyssal_decor:amaranth_1'},
        {output: 'abyssal_decor:amaranth_pinnacle'},
        {output: 'abyssal_decor:amaranth_crate'},
        {output: 'forbidden_arcanus:quantum_catcher'},
        {output: 'tanukidecor:neon_club_sign'},
        {output: 'tanukidecor:neon_diamond_sign'},
        {output: 'tanukidecor:neon_heart_sign'},
        {output: 'tanukidecor:neon_spade_sign'},
        {output: 'tanukidecor:orange_science_pod'},
        {output: 'tanukidecor:green_rocket_lamp'},
        {output: 'tanukidecor:purple_rocket_lamp'},
        {output: 'tanukidecor:pink_rocket_lamp'},
        {output: 'tanukidecor:red_rocket_lamp'},
        {output: 'tanukidecor:turquoise_rocket_lamp'},
        {output: 'tanukidecor:yellow_rocket_lamp'},
        {output: 'tanukidecor:blue_rocket_lamp'},
        {output: 'tanukidecor:minimalist_table'},
        {output: 'tanukidecor:red_science_pod'},
        {output: 'tanukidecor:orange_science_pod'},
        {output: 'tanukidecor:blue_science_pod'},
        {output: 'tanukidecor:green_science_pod'},
        {output: 'tanukidecor:minimalist_dresser'},
        {output: 'tanukidecor:minimalist_mirror'},
        {output: 'tanukidecor:minimalist_wardrobe'},
        {output: 'tanukidecor:regal_armoire'},
        {output: 'tanukidecor:minimalist_stool'},
        {output: 'tanukidecor:minimalist_clock'},
        {output: 'tanukidecor:minimalist_chair'},
        {output: 'tanukidecor:minimalist_couch'},
        {output: 'tanukidecor:minimalist_bed'},
        {output: 'tanukidecor:minimalist_lamp'},
        {output: 'tanukidecor:minimalist_small_table'},
        {output: 'brewery:corn'},
        {output: 'everycomp:mcf/aether_redux/blightwillow_hedge'}, 
        {output: 'everycomp:mcf/aether/decorated_holiday_hedge'}, 
        {output: 'everycomp:mcf/aether/crystal_hedge'}, 
        {output: 'everycomp:mcf/aether/holiday_hedge'}, 
        {output: 'everycomp:mcf/aether/golden_oak_hedge'}, 
        {output: 'everycomp:mcf/aether/crystal_fruit_hedge'}, 
        {output: 'everycomp:mcf/aether/skyroot_hedge'}, 
        {output: 'everycomp:mcf/regions_unexplored/alpha_hedge'}, 
        {output: 'everycomp:mcf/abyssal_decor/cinnamon_hedge'}, 
        {output: 'everycomp:mcw/abyssal_decor/cinnamon_window'}, 
        {output: 'everycomp:q/abyssal_decor/stripped_cinnamon_post'}, 
        {output: 'everycomp:q/abyssal_decor/hollow_cinnamon_log'}, 
        {output: 'everycomp:mcw/abyssal_decor/cinnamon_window2'}, 
        {output: 'everycomp:mcw/abyssal_decor/cinnamon_four_window'}, 
        {output: 'everycomp:mcw/abyssal_decor/stripped_cinnamon_log_window'}, 
        {output: 'everycomp:mcw/abyssal_decor/cinnamon_log_parapet'}, 
        {output: 'everycomp:mcw/abyssal_decor/stripped_cinnamon_pane_window'}, 
        {output: 'everycomp:mcw/abyssal_decor/cinnamon_pane_window'}, 
        {output: 'everycomp:mcw/abyssal_decor/stripped_cinnamon_log_four_window'}, 
        {output: 'everycomp:mcw/abyssal_decor/stripped_cinnamon_log_window2'}, 
        {output: 'everycomp:mcf/abyssal_decor/cinnamon_highley_gate'}, 
        {output: 'everycomp:mcf/abyssal_decor/cinnamon_pyramid_gate'}, 
        {output: 'everycomp:mcf/abyssal_decor/cinnamon_wired_fence'}, 
        {output: 'everycomp:mcf/abyssal_decor/cinnamon_horse_fence'}, 
        {output: 'everycomp:mcf/abyssal_decor/cinnamon_stockade_fence'}, 
        {output: 'everycomp:mcf/abyssal_decor/cinnamon_picket_fence'}, 
        {output: 'everycomp:c/luphieclutteredmod/luphie_pink_window_pane'}, 
        {output: 'everycomp:c/luphieclutteredmod/luphie_flowering_pink_window_pane'}, 
        {output: 'everycomp:mcf/aether_redux/blighted_skyroot_hedge'}, 
        {output: 'everycomp:mcf/aether_redux/gilded_oak_hedge'}, 
        {output: 'everycomp:mcf/aether_redux/chromatic_berry_hedge'}, 
        {output: 'everycomp:mcf/aether_redux/glacia_hedge'}, 
        {output: 'everycomp:mcf/aether_redux/chromatic_hedge'}, 
        {output: 'everycomp:mcf/abyssal_decor/flowering_cinnamon_hedge'}, 
        {output: 'everycomp:mcf/vinery/apple_hedge'}, 
        {output: 'everycomp:mcf/meadow/pine_hedge'},
        {output: 'nameless_trinkets:gods_crown'},
        {output: 'everycomp:q/abyssal_decor/hollow_blackwood_log'},
        {output: 'everycomp:q/abyssal_decor/hollow_white_wood_log'},
        {output: 'sophisticatedbackpacks:smoking_upgrade'},
        {output: 'sophisticatedbackpacks:auto_smoking_upgrade'},
        {output: 'aquamirae:poisoned_chakra'},
        {output: 'aquamirae:maze_rose'},
        {output: 'sophisticatedbackpacks:filter_upgrade'},
        {output: 'sophisticatedbackpacks:void_upgrade'},
        {output: 'sophisticatedbackpacks:advanced_void_upgrade'},
        {output: 'sophisticatedbackpacks:advanced_pump_upgrade'},
        {output: 'sophisticatedbackpacks:pump_upgrade'},
        {output: 'sophisticatedbackpacks:advanced_filter_upgrade'},
        {output: 'sophisticatedbackpacks:advanced_deposit_upgrade'},
        {output: 'sophisticatedbackpacks:deposit_upgrade'},
        {output: 'sophisticatedbackpacks:stack_upgrade_tier_4'},
        {output: 'sophisticatedbackpacks:stack_upgrade_tier_3'},
        {output: 'sophisticatedbackpacks:stack_upgrade_tier_2'},
        {output: 'farmingforblockheads:fertilized_farmland_rich'},
        {output: 'farmingforblockheads:fertilized_farmland_rich_stable'},
        {output: 'farmingforblockheads:fertilized_farmland_healthy'},
        {output: 'farmingforblockheads:fertilized_farmland_healthy_stable'},
        {output: 'farmingforblockheads:fertilized_farmland_stable'},
        {output: 'farmingforblockheads:green_fertilizer'},
        {output: 'farmingforblockheads:red_fertilizer'},
        {output: 'farmingforblockheads:yellow_fertilizer'},
        {output: 'unusualprehistory:amber_button'},
        {output: 'dawnoftimebuilder:camellia_leaves'},
        {output: 'dawnoftimebuilder:camellia_seeds'},
        {output: 'dawnoftimebuilder:grape'},
        {output: 'dawnoftimebuilder:grape_seeds'},
        {output: 'dawnoftimebuilder:maize'},
        {output: 'dawnoftimebuilder:rice'},
        {output: 'dawnoftimebuilder:wild_grape'},
        {output: 'dawnoftimebuilder:wild_maize'},
        {output:'abyssal_decor:fever_blossom_crop_1'},
        {output: 'abyssal_decor:fever_blossom'},
        {output: 'abyssal_decor:fever_blossom_tea'},
        {output: 'galosphere:spectre_flare'},
        {output: 'gemsnjewels:jeweled_gold_circlet'},
        {output: 'gemsnjewels:jeweled_gold_crown'},
        {output: 'gemsnjewels:jeweled_gold_comb' },
        {output: 'gemsnjewels:jeweled_gold_tiara'},
        //Replaced Recipes
        {output: 'mighty_mail:post_box'},
        {output: 'farmersdelight:wheat_dough'},
        {output: 'delightful:cheeseburger'},
        {output: 'delightful:deluxe_cheeseburger'},
        {output: 'luphieclutteredmod:luphie_mermaid_pearl'},
        {output: 'meadow:oil_lantern'},
        {output: 'beautify:hanging_pot'},
        {output: 'pipez:item_pipe'},
        {output: 'tarotcards:tarot_deck'},
        {id: 'fruitfulfun:farmersdelight/honey_pomelo_tea'},
        {mod: 'plushies'},
        {mod: 'perfectplushies'},
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
        {output: 'uncrafter:uncrafter'},
        {output: 'unusualprehistory:organic_ooze'},
        {id: 'candlelight:mozzarella'},
        {id: 'netherdepthsupgrade:eyeball'},
        {id: 'netherdepthsupgrade:fortress_grouper_plate'},
        {output: 'minecraft:brush'},
        {output: 'betterarcheology:iron_brush'},
        {output: 'betterarcheology:diamond_brush'},
        {output: 'orpheus:apollos_son'},
        {output: 'sophisticatedbackpacks:xp_pump_upgrade'},
        {output: 'dawnoftimebuilder:camellia_flower_pot'},
        {output: 'dawnoftimebuilder:grape_seeds_flower_pot'}, 
        {output: 'dawnoftimebuilder:maize_flower_pot'},
        {id: 'abyssal_decor:cinnamon_tea_recipe'},
        {output: 'minecraft:cake'},
        {output: 'sophisticatedbackpacks:feeding_upgrade'}, 
        {output: 'sophisticatedbackpacks:advanced_feeding_upgrade'},
        //{output: 'buildinggadgets:template_manager'},
        //{output: 'charginggadgets:charging_station'},
        
    ];
    
      for (const remove of toRemove) {
        event.remove(remove);
    }

    event.remove({ output: 'minecraft:green_dye', type: 'minecraft:smoking' })
})