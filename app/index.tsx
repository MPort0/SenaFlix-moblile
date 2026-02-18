import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const bannerData = [
  {
    id: "1",
    image: "https://m.media-amazon.com/images/S/pv-target-images/ae3ce4e04beae38473fa51fd111a778760943d48032d72587e3477c29442bb01._SX1080_FMpng_.png",
    title: "Coraline"
  },
  {
    id: "2",
    image: "https://ogimg.infoglobo.com.br/in/24076153-754-a08/FT1086A/sonic-nova-aparencia.png",
    title: "Sonic: O Filme"
  },
  {
    id: "3",
    image: "https://images-3.rakuten.tv/storage/snapshot/shot/258c02ba-034d-413e-8ddd-ae7a49524925-snapshot-1590665238-width936-quality90.jpeg",
    title: "Harry Potter e as Relíquias da Morte: Parte 1"
  }
]

const filmesEmAlta = [

  {
    id: 1,
    title: "Interstellar",
    image: "https://m.media-amazon.com/images/I/91obuWzA3XL._AC_UF894,1000_QL80_.jpg"
  },
  {
    id: 2,
    title: "Five Nights At's Freddy's",
    image: "https://ingresso-a.akamaihd.net/prd/img/movie/five-nights-at-freddys-2/3d32e64a-c91b-4b19-a986-d4fd9374e71a.webp%22"
  },
  {
    id: 3,
    title: "Invocação do Mal 2",
    image: "https://br.web.img3.acsta.net/pictures/16/04/18/20/43/025084.jpg"
  },
  {
    id: 4,
    title: "Dark",
    image: "https://br.web.img2.acsta.net/r_1280_720/pictures/17/11/01/13/35/2780331.jpg"
  }
]

const series = [
  {
    id: 1,
    title: "Stranger Things",
    image: "https://www.europanet.com.br/superposter/images/vejapordentro/107063/107063.jpg"
  },
  {
    id: 2,
    title: "Arcane",
    image: "https://pbs.twimg.com/media/GUmsqKmWsAAxZnR.jpg"
  },
  {
    id: 3,
    title: "It: Bem Vindos à Derry",
    image: "https://http2.mlstatic.com/D_NQ_NP_729621-MLB98881040183_112025-O.webp"
  },
  {
    id: 4,
    title: "Olympo",
    image: "https://images.justwatch.com/poster/330517928/s718/olympo.jpg"
  }
]

const filmes = [
  {
    id: 1,
    title: "Annabelle",
    image: "https://br.web.img2.acsta.net/pictures/14/08/11/21/32/336680.jpg"
  },
  {
    id: 2,
    title: "A Freira",
    image: "https://br.web.img3.acsta.net/pictures/18/07/18/21/53/1348208.jpg"
  },
  {
    id: 3,
    title: "Minecraft: O Filme",
    image: "https://acdn-us.mitiendanube.com/stores/004/687/740/products/pos-04086-5340d3c734b9f88f7a17429947570553-640-0.webp%22"
  },
  {
    id: 4,
    title: "Harry Potter e a Pedra Filosofal",
    image: "https://img.elo7.com.br/product/zoom/2657A44/big-poster-harry-potter-e-a-pedra-filosofal-lo03-90x60-cm-poster.jpg%22"
  }
]

const {width} = Dimensions.get("window")

export default function Index() {
  return (

    
    <SafeAreaView style={style.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View>
          <View style={style.senaiFlix}>
            <Text style={style.mainTitle}>SENAI</Text>
            <Text style={style.mainTitle2}>FLIX</Text>
          </View>
          <Text style={style.welcomeText}>Bem vindo ao seu catálogo de filmes e séries.</Text>
        </View>

        <View style={style.section}>
          <FlatList 
            data={bannerData}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={(({item}) =>(
              <View style={style.bannerContainer}>
                <View style={style.bannerItem}>
                  <Image style={style.bannerImage} source={{uri: item.image}}></Image>
                  <Text style={style.bannerTitle}>{item.title}</Text>

              <TouchableOpacity style={style.bannerButtom}>
                <Text style={style.bannerButtonText}>Assitir</Text>
              </TouchableOpacity>

                </View>
              </View>
            ))}
          />
        </View>


        <View style={style.section}>
          <Text style={style.sectionTitle}>Em Alta</Text>

          <FlatList
            contentContainerStyle={style.movieList}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={filmesEmAlta}
            renderItem={(({ item }) => (

              <View style={style.movieItem}>
                <Image style={style.movieImage} source={{ uri: item.image }} />
                <Text style={style.movieTitle}>{item.title}</Text>



              </View>
            ))}>

          </FlatList>
        </View>

        <View style={style.section}>
          <Text style={style.sectionTitle}>Séries</Text>

          <FlatList
            contentContainerStyle={style.movieList}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={series}
            renderItem={(({ item }) => (

              <View style={style.movieItem}>
                <Image style={style.movieImage} source={{ uri: item.image }} />
                <Text style={style.movieTitle}>{item.title}</Text>
              </View>

            ))}>


          </FlatList>
        </View>

        <View style={style.section}>
          <Text style={style.sectionTitle}>Filmes</Text>

          <FlatList
            contentContainerStyle={style.movieList}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={filmes}
            renderItem={(({ item }) => (

              <View style={style.movieItem}>
                <Image style={style.movieImage} source={{ uri: item.image }} />
                <Text style={style.movieTitle}>{item.title}</Text>
              </View>

            ))}>


          </FlatList>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1, //Ocupa a tela inteira
    paddingHorizontal: 10
  },
  senaiFlix: {
    flexDirection: "row"
  },
  mainTitle: {
    color: "#C70000",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5
  },
  mainTitle2: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  },
  welcomeText: {
    color: "#fff",
    fontSize: 14,
    opacity: 0.8,
    marginBottom: 20
  },
  movieImage: {
    width: 100,
    height: 160
  },
  movieTitle: {
    color: "#fff",
    marginTop: 5,
    fontSize: 14,
    fontWeight: 400,
    flexWrap: "wrap"
  },
  movieItem: {
    width: 100
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },
  movieList: {
    gap: 15
  },
  section: {
    marginBottom: 30
  },
  bannerImage:{
    width:"100%",
    height:200,
    resizeMode:"cover",
    borderRadius:8
  },
  bannerTitle:{
    color:"#fff",
    fontSize: 20,
    fontWeight: "bold",
    position:"absolute",
    bottom: 40,
    left: 15

  },
  bannerItem:{
    flex:1,
    height: 200,
    paddingHorizontal: 5,
    position: "relative"
  },
  bannerContainer:{
    width: width - 30

  },
  bannerButtom:{
    backgroundColor:"#e50914",
    borderRadius: 5,
    paddingVertical: 6,
    paddingHorizontal: 16,
    bottom: 10,
    left:15
  },
  bannerButtonText:{
    color:"#fff",
    fontSize: 13,
    fontWeight:"bold"
  }
})
