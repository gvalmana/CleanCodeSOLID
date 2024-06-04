(() => {

    function getMovieInfoById( id: string ) {
        console.log({ id });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getCastByMovieId( id: string ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById( Id: string ) {
        console.log({ Id });
    }
    
    // Crear una película
    interface Movie {
        title:          string;
        description:    string;
        rating:         number;
        cast:           string[];
    }

    function createMovie( movie: Movie ) {
        console.log({ ...movie });
    }

    // Crea un nuevo actor
    interface Actor {
        fullName:   string;
        birthDate:  Date;
    }

    
    function createActor( actor: Actor ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( actor.fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;
    }

    //Continuar
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
        
        if (isDead) return 1500;
        
        if (isSeparated) return 2500;
        
        return (isRetired) ? 3000 : 4000;
    }

})();
