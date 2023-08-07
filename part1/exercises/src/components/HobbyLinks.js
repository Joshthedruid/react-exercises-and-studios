export default function HobbyLinks () {
    let hobbyLinks = ["https://www.artofpewter.com/00_caratteristiche_la_lavorazione_del_peltro.asp?lingua=u", "https://www.blender.org/"];
    return(
        <div>   
            <a href = {hobbyLinks[0]}>Learn to Smelt Pewter</a>
            <br></br>
            <a href = {hobbyLinks[1]}>Learn to Make 3D Models</a>
        </div>
    )
}