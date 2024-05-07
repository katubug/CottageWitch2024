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
        'meadow:climbing_rope_topmount',
        'nameless_trinkets:mysterious_trinket',
        'herbalbrews:jug',
        'forbidden_arcanus:bat_wing',
        'herbalbrews:mixed_tea_leaf_block',
        'pipez:energy_pipe',
        'pipez:gas_pipe',
        'pipez:universal_pipe',
        'sophisticatedstorage:feeding_upgrade',
        'sophisticatedstorage:advanced_feeding_upgrade',
        'sophisticatedstorage:shulker_box',
        'sophisticatedstorage:iron_shulker_box',
        'sophisticatedstorage:gold_shulker_box',
        'sophisticatedstorage:diamond_shulker_box',
        'sophisticatedstorage:netherite_shulker_box',
        'perfectplushies:nyf_plushie',
        'perfectplushies:sirjain_plushie',
        'perfectplushies:sizableshrimp_plushie',
        'perfectplushies:tslat_plushie',
        'perfectplushies:silk_plushie',
        'perfectplushies:june_plushie',
        'perfectplushies:daniel_plushie',
        'perfectplushies:gamerpotion_plushie',
        'perfectplushies:joosh_plushie',
        'perfectplushies:rocris_plushie',
        'perfectplushies:gamerpotion_plushie_rare',
        'perfectplushies:geode_plushie',
        'perfectplushies:sirjain_plushie_rare',
        'relics:shadow_glaive',
        'relics:infinity_ham',
        'earthmobsmod:ruby',
        'easy_villagers:iron_farm',
        'moblassos:emerald_lasso',
        'moblassos:contract',
        'unusualprehistory:encrusted_flask',
        'unusualprehistory:encrusted_organ',
        'unusualprehistory:encrusted_sack',
        'unusualprehistory:encrusted_spawn_egg',
        'galosphere:silver_nugget', 
        'galosphere:silver_ingot', 
        'galosphere:raw_silver',
        'galosphere:silver_block',
        'galosphere:raw_silver_block',
        'earthmobsmod:ruby_block',
        'functionalstorage:armory_cabinet',
        'delightful:jelly_bottle',
        'delightful:glow_jelly_bottle',
        'aquaculture:tuna',
        'aquaculture:tuna_bucket',
        'delightful:blueberry_sack',
        'regions_unexplored:salmonberry',
        'trashcans:energy_trash_can',
        'framedblocks:powered_framing_saw',
        'vegandelight:salt',
        'reliquary:zombie_heart',
        'extra_compat:reinforced_gold_machete',
        'sophisticatedbackpacks:inception_upgrade',
        'justoutdoorstuffs:garden_lawn_mower',
        'justoutdoorstuffs:patio_bbq_grill',
        'justoutdoorstuffs:patio_modern_planter_black',
        'justoutdoorstuffs:garden_hose',
        'justoutdoorstuffs:garden_bag_fertilizers',
        'justoutdoorstuffs:patio_modern_planter_white',
        'abyssal_decor:amaranth_1',
        'abyssal_decor:amaranth_pinnacle',
        'abyssal_decor:amaranth_crate',
        'forbidden_arcanus:quantum_catcher',
        'tanukidecor:neon_club_sign',
        'tanukidecor:neon_diamond_sign',
        'tanukidecor:neon_heart_sign',
        'tanukidecor:neon_spade_sign',
        'tanukidecor:orange_science_pod',
        'tanukidecor:green_rocket_lamp',
        'tanukidecor:purple_rocket_lamp',
        'tanukidecor:pink_rocket_lamp',
        'tanukidecor:red_rocket_lamp',
        'tanukidecor:turquoise_rocket_lamp',
        'tanukidecor:yellow_rocket_lamp',
        'tanukidecor:blue_rocket_lamp',
        'tanukidecor:minimalist_table',
        'tanukidecor:red_science_pod',
        'tanukidecor:orange_science_pod',
        'tanukidecor:blue_science_pod',
        'tanukidecor:green_science_pod',
        'tanukidecor:minimalist_dresser',
        'tanukidecor:minimalist_mirror',
        'tanukidecor:minimalist_wardrobe',
        'tanukidecor:regal_armoire',
        'tanukidecor:minimalist_stool',
        'tanukidecor:minimalist_clock',
        'tanukidecor:minimalist_chair',
        'tanukidecor:minimalist_couch',
        'tanukidecor:minimalist_bed',
        'tanukidecor:minimalist_lamp',
        'tanukidecor:minimalist_small_table',
        'brewery:corn',
        'everycomp:mcf/aether_redux/blightwillow_hedge', 
        'everycomp:mcf/aether/decorated_holiday_hedge', 
        'everycomp:mcf/aether/crystal_hedge', 
        'everycomp:mcf/aether/holiday_hedge', 
        'everycomp:mcf/aether/golden_oak_hedge', 
        'everycomp:mcf/aether/crystal_fruit_hedge', 
        'everycomp:mcf/aether/skyroot_hedge', 
        'everycomp:mcf/regions_unexplored/alpha_hedge', 
        'everycomp:mcf/abyssal_decor/cinnamon_hedge', 
        'everycomp:mcw/abyssal_decor/cinnamon_window', 
        'everycomp:q/abyssal_decor/stripped_cinnamon_post', 
        'everycomp:q/abyssal_decor/hollow_cinnamon_log', 
        'everycomp:mcw/abyssal_decor/cinnamon_window2', 
        'everycomp:mcw/abyssal_decor/cinnamon_four_window', 
        'everycomp:mcw/abyssal_decor/stripped_cinnamon_log_window', 
        'everycomp:mcw/abyssal_decor/cinnamon_log_parapet', 
        'everycomp:mcw/abyssal_decor/stripped_cinnamon_pane_window', 
        'everycomp:mcw/abyssal_decor/cinnamon_pane_window', 
        'everycomp:mcw/abyssal_decor/stripped_cinnamon_log_four_window', 
        'everycomp:mcw/abyssal_decor/stripped_cinnamon_log_window2', 
        'everycomp:mcf/abyssal_decor/cinnamon_highley_gate', 
        'everycomp:mcf/abyssal_decor/cinnamon_pyramid_gate', 
        'everycomp:mcf/abyssal_decor/cinnamon_wired_fence', 
        'everycomp:mcf/abyssal_decor/cinnamon_horse_fence', 
        'everycomp:mcf/abyssal_decor/cinnamon_stockade_fence', 
        'everycomp:mcf/abyssal_decor/cinnamon_picket_fence', 
        'everycomp:c/luphieclutteredmod/luphie_pink_window_pane', 
        'everycomp:c/luphieclutteredmod/luphie_flowering_pink_window_pane', 
        'everycomp:mcf/aether_redux/blighted_skyroot_hedge', 
        'everycomp:mcf/aether_redux/gilded_oak_hedge', 
        'everycomp:mcf/aether_redux/chromatic_berry_hedge', 
        'everycomp:mcf/aether_redux/glacia_hedge', 
        'everycomp:mcf/aether_redux/chromatic_hedge', 
        'everycomp:mcf/abyssal_decor/flowering_cinnamon_hedge', 
        'everycomp:mcf/vinery/apple_hedge', 
        'everycomp:mcf/meadow/pine_hedge',
        'nameless_trinkets:gods_crown',
        'everycomp:mcf/aether_redux/purple_glacia_hedge',
        'everycomp:q/abyssal_decor/hollow_blackwood_log',
        'everycomp:q/abyssal_decor/hollow_white_wood_log',
        'sophisticatedbackpacks:smoking_upgrade',
        'sophisticatedbackpacks:auto_smoking_upgrade',
        'aquamirae:poisoned_chakra',
        'aquamirae:maze_rose',
        'unusualprehistory:ammonite_shell_icon',
        'sophisticatedbackpacks:filter_upgrade',
        'sophisticatedbackpacks:void_upgrade',
        'sophisticatedbackpacks:advanced_void_upgrade',
        'sophisticatedbackpacks:advanced_pump_upgrade',
        'sophisticatedbackpacks:pump_upgrade',
        'sophisticatedbackpacks:advanced_filter_upgrade',
        'sophisticatedbackpacks:advanced_deposit_upgrade',
        'sophisticatedbackpacks:deposit_upgrade',
        'sophisticatedbackpacks:stack_upgrade_tier_4',
        'sophisticatedbackpacks:stack_upgrade_tier_3',
        'sophisticatedbackpacks:stack_upgrade_tier_2',
        'farmingforblockheads:fertilized_farmland_rich',
        'farmingforblockheads:fertilized_farmland_rich_stable',
        'farmingforblockheads:fertilized_farmland_healthy',
        'farmingforblockheads:fertilized_farmland_healthy_stable',
        'farmingforblockheads:fertilized_farmland_stable',
        'farmingforblockheads:green_fertilizer',
        'farmingforblockheads:red_fertilizer',
        'farmingforblockheads:yellow_fertilizer',
        'unusualprehistory:amber_button',
        'dawnoftimebuilder:camellia_leaves',
        'dawnoftimebuilder:camellia_seeds',
        'dawnoftimebuilder:grape',
        'dawnoftimebuilder:grape_seeds',
        'dawnoftimebuilder:maize',
        'dawnoftimebuilder:rice',
        'dawnoftimebuilder:wild_grape',
        'dawnoftimebuilder:wild_maize',
        'abyssal_decor:fever_blossom_crop_1',
        'abyssal_decor:fever_blossom',
        'abyssal_decor:fever_blossom_tea',
        'galosphere:spectre_flare'

      ];
    
      for (const hide of toHide) {
        event.hide(hide);
    }
})