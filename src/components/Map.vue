<template>
    <div class="map">
        <div ref="map" style="width: 100%; height: 100%"></div>
    </div>
</template>

<script>
    export default {
        name: "HereMap",
        data() {
            return {
                platform: {},
                map: {}
            };
        },
        props: {
            appId: String,
            appCode: String,
            theme: String
        },
        mounted() {
            this.platform = new H.service.Platform({
                app_id: this.appId,
                app_code: this.appCode,
            });
            // Создание карты
            let layers = this.platform.createDefaultLayers();
            this.map = new H.Map(
                this.$refs.map,
                layers.normal.map,
                {
                    center: {lat: 37.73987, lng: -121.42618},
                    zoom: 14,
                }
            );
            // Стилизация тайлов
            let tiles = this.platform.getMapTileService({ "type": "base" });
            let layer = tiles.createTileLayer(
                "maptile",
                this.theme,
                256,
                "png",
                { "style": "default" }
            );
            this.map.setBaseLayer(layer);
            let events = new H.mapevents.MapEvents(this.map);
            let behavior = new H.mapevents.Behavior(events);
            let ui = H.ui.UI.createDefault(this.map, layers);
        }
    }
</script>
<style>
.map {
    width: 100%;
    background-color: var(--mainColor);
}
</style>
