package test;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

class AnimalTest {
    @Test
    public void siElAnimalEsPesado(){
        Animal caballo = new Animal("caballo", "grande", 3000);
        Animal perro = new Animal("perro", "Mediano", 20);

        boolean esPesado = caballo.esPesado();
        boolean esPesado1 = perro.esPesado();

        assertEquals(true,caballo.esPesado());
        assertFalse(esPesado1);
    }
  
}
