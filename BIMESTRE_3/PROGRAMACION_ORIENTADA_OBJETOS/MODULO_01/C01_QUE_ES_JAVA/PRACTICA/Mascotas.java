public class Mascotas {
    public static void main(String[] args) {
        
        String nombreManchitas = "Manchitas";
        int edadManchitas = 2;
        double cantidadComidaManchitas = 1.5;
        String ladridoManchitas = "guau guau";

        String nombreNemo = "Nemo";
        int edadNemo = 1;
        double cantidadComidaNemo = 0.14;
        String sonidoBurbujasNemo = "bloop bloop";

        String nombreSilvestre = "Silvestre";
        int edadSilvestre = 3;
        double cantidadComidaSilvestre = 0.5;
        String maullidoSilvestre = "miau";

        String nombreManuelita = "Manuelita";
        int edadManuelita = 12;
        double cantidadComidaManuelita = 0.3;
        String lugarViviendaManuelita = "en Pehuajó";

        String nombreGardel = "Gardel";
        int edadGardel = 1;
        double cantidadComidaGardel = 0.35;
        String cantoGardel = "tutu-tutu";

        // Mostrar la información de cada mascota
        System.out.println(nombreManchitas + " tiene " + edadManchitas + " años");
        System.out.println(nombreManchitas + " come " + cantidadComidaManchitas + " kilos y hace " + ladridoManchitas);

        System.out.println("#############################################################################\n");
        System.out.println(nombreNemo + " tiene " + edadNemo + " año");
        System.out.println(nombreNemo + " come " + cantidadComidaNemo + " kilos y sus burbujas de aire hacen " + sonidoBurbujasNemo);

        System.out.println("#############################################################################\n");
        System.out.println(nombreSilvestre + " tiene " + edadSilvestre + " años");
        System.out.println(nombreSilvestre + " come " + cantidadComidaSilvestre + " kilos y su maullido suena " + maullidoSilvestre);

        System.out.println("#############################################################################\n");
        System.out.println(nombreManuelita + " tiene " + edadManuelita + " años");
        System.out.println(nombreManuelita + " come " + cantidadComidaManuelita + " kilos y según la canción, vivía " + lugarViviendaManuelita);

        System.out.println("#############################################################################\n");
        System.out.println(nombreGardel + " tiene " + edadGardel + " año");
        System.out.println(nombreGardel + " come " + cantidadComidaGardel + " kilos y la onomatopeya de su canto es " + cantoGardel);
    }
}
