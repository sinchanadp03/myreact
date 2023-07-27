const Courses = () => {
    return (
      <div class="container" style={{ marginTop: "100px" }}>
        <div class="row">
          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://media.istockphoto.com/id/1221204650/photo/business-can-not-wait.jpg?s=612x612&w=0&k=20&c=1ZJn_BWN-OqIlnjohELZnsUlaXsw9LsKHkUDS8mHfhY="
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <h5 class="card-title" >C </h5>
                <p class="card-text">
                C is a powerful and versatile programming language, widely used for system development, embedded systems, and high-performance applications.
                </p>
                <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20230506112814/C-Programming-Language.png"
                class="card-img-top"
                alt="..."
              ></img>
                <a href="#" class="btn btn-primary">
                  Know more
                </a>
              </div>
            </div>
          </div>
  
          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              
              <div class="card-body">
                <h5 class="card-title">C++</h5>
                <p class="card-text">
                C++ is an object-oriented programming language that extends the capabilities of C,  for complex software development.
                </p>
                <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxATEhITERIWFRIXFRAVFxcWFRUZFRoXFxUWFxcVFhUZHyggGB0nGxcXITEhJikrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGDEmHyYtLS8tLSstLTUtLS0vLS0tKy0tLS0vLS0tLS0tLS0tLS8tLS0tKystLS0tLS0tLS0tLf/AABEIAJoBSAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQQDBQcCBgj/xABFEAACAQIEAgcEBgQOAwEAAAABAgADEQQSITEFQQYTIlFhcZEHMkKBI1KhscHRFFRichYzNHOCkpOisrPC0vDxU+HiJP/EABoBAQEAAwEBAAAAAAAAAAAAAAECAAMEBQb/xAAoEQEBAAIBBAEDAwUAAAAAAAAAAQIDEQQhMUESIjJRYXHwE4GRscH/2gAMAwEAAhEDEQA/AKsmRJE+jeYCRJtIkhIkSRIhRSIiAJMiTJoIiJIIiJIIiJNBIkyJNFJMiTAIiIkpIiJNBERJBIkyJKaREQoIiJIJtOEikV+kZBaorWa2q5SCPUj0mrmwwFIPSqIpUVCyHtWF1F9AfOTVYeWPiQQdWqsrWQAldr5jKUvcVCgooKllpqrFdri/rpaUYJz8kREEERElhERMY9SQJEmfQPUJEsNTRWsxYjKp0te5APPlrMdenlZl3sSJHLOHgSJIkTKmkREASZEmTQRESQRESQRESaCRJkSaKSZEmARERJSRESaCIiSCRJkSU0iIhQRESQTZcMS1Oo6UxUqBlFiM1lIN2C8+6a2bXgtEWZ8rscypZGIIB1LG3KTVYfcwcYpgMhyhGZFZlGwbXly8pQl7jFILUsA+2rPuxue0PDl8pRkpz+6kRExBERJYRETGPUkCRJtPoHqNjQQtlH0TPYWvnzAAaXA0Nh3g7ShWvma5ubm5BuCb735y8LZAop1RcDMQPe+dtvCUKgsSNRrz3+c1Y+TUCRJiVUVEREASZEmTQRESQRNnwLgdbFPlpiyj3nPur+Z8P+50ngnRPC4exy9ZU+u4BN/2V2X7/Gc+zdjh+7Zr0ZZ9/TmmB4Hiq2tOg7DkbZVPkzWB9ZtKXQXHHdUX95x/pBnVYnLeqyviOqdJj7rldToLjhsKbeT/AJgTV43gGLpa1KDgd4GYDzKXAnaIhOpy9i9JhfFcEkzr/G+i+GxIJZMlT/yJYNf9obN8/snNOPcCrYV8tQXU3yuPdb8j4ffN+G3HNybdGWvv6aqIiW5yIiTQRESQSJMiSmkREKCIiSCbXg1Pssx6w9tFtTLC1xq5t3TVTbcHw7MvZZ1+kUNka3Zyk39bSarX9ylxGm6uwcsbEhS17lQTYi/KVZf4rTZerzli5QE5iSb5m79pQgnOcUiIggiIksIiJjHqTrIk3n0D1F+kisoytULW1UEA/wBEfEPLXwlFzqbXtfnv85saQsoC0aoJGrLub9xy6Dy+2VKNIF8uU/Hod75TYHbW9pql8msNpBl0YJhYshtkqFrg2BAe33LKREeeU2IiImJJMiTJoJseAcIfFVlpLoN3b6qjc+fIDvM106r0C4UKOGDkfSVbOf3fgHpr5sZz79nwx59tmnX88uG84fgadGmtOkuVFHzPeSeZPfLMTT9KOPJhKJqEZnPZpr3t4+A3P/sTzJLlf1ejbMZz6XuIcRo0Fz1qiovex38ANyfAT5fFe0bBqbIlWp4hVUf3iD9k5pxLiFWvUNSs5Zz37AfVUch4StOzHpsZPqcWfVZX7XUKPtKwpPao1VHeMh/1T6XhHHcNiR9BVDEaldQ481OtvHacKnuhVZGDIxVgbhlJBB7wRDLp8fSceqzl7936DnynT7jeHp0WouoqVXHZT6vdUY/DY7cz6kfP0vaLUGGKsl8V7oewyEW98r9bw2O/hPiMRWd2Z3Ys7G7MTck+M169N55rZu6mXHjH2y03v5z1LvCejWLxCdZQphlzFb50GotfQnxk8U4RXwxQV0ClgxAzK17WvsfETf8AKc8cuG4ZSc8dlGIiZWsiJvqHQ/HOqutIFWAYHOmxFxzkWyeTjhll4nLQyJnx2FelUanUFnUgMLg2uAdx4ETBBFnF4IiIVJE9hdvGCskcPE2vBqIKsxV27arZGZbXGrG281rIPv8A+eE2fCKPZYkVD20XKjMLXGrnLvaTV4T6mLiWF+kyKG0U61CbtYklh4flKhwraba5/wC6LmZsUKlOowJbTOAWvcrqLi8xpWe1r731IuRmFjry2kjLjlJwNTu+rz7wT+BngYY69pNBc68tu6ZP0qp9bmG2HJbafKY2du1oACLEBbaXB9YCzFIwb+A1AFzuSAbD5EesfoT2BtoRf7QLedyJ6/SmGtx8J1UGxygAjxsPsjr3ta+lgNRcaG4v6wHGLDXolDY2v4RJxFVmtfkLCwsN4mJvHPZ4kgyJNp9A9Ns6NCpkHWKzJbsgAl/CzD3R5+hlGhSu4Vgdzcc9ATbzNrSzSwigBmuwys3Z90WUtlZ9wdNrDzlWmGZxkHaJ0C8jytczVPZr3h1UgjLrlds1zpYEjTblb5zAZsKxORs7gm4BCKo11IzuB2tttfOa8zImoiIikkyJMmhlwlDrKlNPruif1mA/Gd0RQAANAAAPITjHRsf/AK8N/PUv8QnaJ53WXvI7Olna0nH/AGicRNXGOt+xSApr52Bc+dzb+iJ2CcH4+ScVib79fX/zGkdLPqtPV36ZFGIidzzyIiTWJiW+DUw2Iw6sAVNaiCDqCC6ggjutOy/wawP6rR/s0/KadmyYeW3VpuyXitL7L/5Gf56p9yzS+1k/SYb9yt96ToWCwVKkuWlTVFuTZQALnc2ExY7heHrEGtRSoVuBnUNa+9r7bCcszkz+Tty1W6vg4bTqX857nXeJdHsEtGqy4aiGFOoQRTW4IU2INp8F7O8PSrYkpVRXHUubMARcMgvY89T6zdNkstcGfTXHKY8+Xz5nbuC/yeh/NUv8AmD+DuC/VqP9mv5TZU0CgKoAUAAAbADQATTszmTt6fp7qttrjHTZrY/E/vJ/lpNWrXnbMTwLCVGL1MPSZ23ZkUk6W1JHcBPl+n/CMNRwhejQpo/WUxdUUGxJuLgSsdk7Rzbuky+rPn81zyJCNeTNlefWzXh6CnTZ62UPsMhOvdoZhxeBdKgpXzE5bfPw5TZUMcoo0lWuKbAdrsFvltDY7D9c1W9yqWGhGZ9dRppppr3zXzW6448NfxThxo5TmzA31tbUbjf/AJrLQwfVBQ+JNNmF7ANl+bAyKmPo1KVRCvVm+dbsz3Ykk620/wDqWMJjaagZsRnp2sUamS22wPnDuJMee38/01z4d2pdcahYhsgBuT6k+O0zPwtFstWuFc2OW1wO65vpH6agoFVNm67Oq2O1wRrtMmLOGrMKhqlLgZlyknQW0P8A3CjjH+/7sFDhwKNUeqAgYqCqlr20v5Su1FMxtUzIq5rqNeQsAfOXOHVlUHJiCnaOjJdSvI+B+cjF1qb1iaY+C18hIzX97Lbu0vaAsx4n8/619WnlYgHkpF+4gEXExEnvmfEAZ2sO74SBewucu4udfnMDQaagmIiYHqSJEkz6B6i9RpqpsHZXChibdm1gSthqdD87SoxBY62BJ1I/BdvlLfXsDZmQdlderVtwOyezc6fdK7IesKkZjmIsulz4WGnpNUNWWqFlILrUsCdQwfQHUMQL2F9DKBlxfdLJSIFiMxa9gdDpYcja/jKZmROSIiIpJMiTJoWOHV+rrUnOyVKbHyVgT907lOCzr/Q7iYr4WmSe2g6t++6jQ/MWPznD1mPaZOrpcu9jdzjHTrAmlja2mjkVV8Q+/wDeDek7PPmunHRz9LpA0/4+ncpyzA7oT4208R4mc2jP45d27qNdzw7OPRPVSmykqwIYEggixBG4IOxnmei8wiIvJY90arIyspsykMp7iDcH1m4/hdxD9Zf0T/bLVHoVi2wxrhe1uKRB6wpb3h49y7keNgfm5r+nJV+eH5jsHs/4hWr4UvWcu/WOLm2wC2Gg8ZqvaPxnE0HoChVKBlqFrBdbFbbg95mq6G9L8PhMOaVVKhbrHa6KpFiFHNh3TXdOOkNHGNRakrgItQHOFHvFSLWJ7pzzC/1PHZ057p/R4mXfspVelWPYFWxDEEEEWTUEWI92a/h3EK1Bs9Fyj2K3FtiQSNQe4ekrRN3E/DiueV78t0el3EP1l/RP9s7DwmqzUKLMbs1KkSe8lQSZwOdM4d7QcJTpUkanWulOmpsqWuqgG3b8Jo2YfiOrpt3Fvzy/y0vS3pJjaWMr06ddlRWUKoCWHYU8x3kzQY/j+LrJkrVmdLg2IW1xsdBI6R49K+JrVkBCuVIDWDaIq6gEjlNdLmM4nZzbNmVyvft3SrWlhGvKslWtMrTYtSQZ5Rrz0BJQ9Fh3QGudB8vORkPh6ie8OxUhrAkAka/baSxIpOb2VtNDYbefoYKEAMVOU21tp4aywMad8gv2CdeYBAI7jqPSeVxegBQaCnz3y7XPdflJquJ+WHq22ym+gtbmdvWesCSH0XMQDoWy8x37+UyHGNcmwBylSQdNdQdeYmPAJdiCLjK1xlLegHjbWA7czgxX8YxO9lOpvqVB35yu28zYgdtgFYDTRjqBYWveYX3gjJEREwPUm8iSZ9A9RsEp5grMl2sLDrFXPbQHKdeXLeVUr/SZm5ls1tDrcGw8LzI9MOQwdQLKDc2K2UC1tyNNLTyXLVSU3LEi9ufM30mo1KqiXPWBjlYAANftArc3AtoZWM2uJNVVZbZtO0xC2tzCj8fumqMyXkZIiIigkyJMmgm86JcdOFrXa/VPZag7u5wO8XPyJmjia8sZlOKccrjeY7xSqKwDKQVIBBGoIOxBnqcn6L9KqmF7DgvQv7vxLfcpf/Dt5c+l8L4rQxC56NQOOYHvDwZTqp855e3Tlhf0ejr3Y5z9VLj3RjC4rWotqlrComj+R5MPMGfH4r2Z1QfosQhH7alT6i9/SdKiGO3PHtKzPThl3scxoezTEE9uvSUfsh2PoQs+o4D0JwuHIc3q1BqGe1ge9U2Hmbkd8+miOW7PL2MdGGN5kJ8P076JJUV8TRypUUFqgJAVwNS19g3jz598+s4nxSjh0z1qgReV9z4Ku7HynK+l3S2pizkQFMODovxMRsz2+xfv5OnHK3mJ6jPCY8ZPmYiJ1vLIiIJIiJIIiIUIiIk0JVrS1SqCVJKtaFFXCw18bfhJz+HK0xK15MhLJ1n+n7BaC4+Wn2THEKOWQMPu5D7pmwFs+trWPInmNrSrLfDb59DY27idmU8vK3zknHy8YgdtrADa1gbbDvF5gfeZ8TfOb6nKmpuPgXU32MrtBOXkiImB6kiRJM+geo2YB2tTNPKMoLU/eCggnUG97385Qy5nsxAudTplH9XS3lLpwrEFRSNsgIYKblrA3zc76i0oCm18tjm2tY3v3WmrE1cr0FRCchJJChmtYgg6oFNuW9zKJl3D0aq5gVdUK1CbghdEJF76b2lIzImoiIikkyJMmgiIkghHdGD02ZHGzKSp9RESaG+wHT/HU9HKVR+2tm9VI+0Gbel7Tj8WFHyq/gUnw1WnfbeV5punC+myb9k9ug1facfhwvrV/AJNTjvaDjnuEyUh+wt29XJH2CfKRJmrCemXfsvtmxOJqVGL1HZ2PxMST5XPKYZMiU0kREkEREEkREkEREKERESaCIiDEq1pYRrytJU2kpqzEhGvJk1BM+EZQTmJAtyv3g8vAGYIgyXhnqsGYkbEAnfewvbc73mFjrJTyvIfeSyoiImB6kiRJM+geoSJJkSQ9XkGTaQTAVEREASZEmTQRESQRESQTHVp323mSJNCnEsVad9t5Xk0JkSZElhERJBERBJERJBERChEREmgiIgwiIkpSptLCNeVpKtaFgsWYkI15MlL0k8sZ6p85D7yR6RERMY9SZEkz6B6gZEkyJISDBgRCioiIgCTIkyaCIiSCIiSCIiTQTHVp385kkSaFWJ7rbzxJYiIiSCIiCSIiSCIiFCIiJNBERBhERJSRETGJVrSwrXlaZaHP5QoqxT5/hvPLbyImtBERMY//9k="
                class="card-img-top"
                alt="...loading"
              ></img>
                <a href="#" class="btn btn-primary">
                  Know more
                </a>
              </div>
            </div>
          </div>
          <br></br>
  
          <div class="col">
            <div class="card" style={{ width: "18rem" }}>

              <div class="card-body">
                <h5 class="card-title">JAVA</h5>
                <p class="card-text">
                Java is a popular and versatile programming language java is useful used for building diverse applications and software solutionsbuilding diverse applications and software solutio..
                </p>
                <img
                src="https://www.edureka.co/blog/wp-content/uploads/2021/10/java_logo_icon_168609.png"
                class="card-img-top"
                alt="nothing"
              ></img>
                <a href="#" class="btn btn-primary">
                  Know more
                </a>
              </div>
            </div>
          </div>
          <br>
          </br>
  
          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              
              <div class="card-body">
                <h5 class="card-title">Python</h5>
                <p class="card-text">
                Python is a high-level programming language known for its simplicity, making it ideal for various applications.
                </p>
                <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeR60xzpNQFaluypjEb405WezwB5Exmx8MLw&usqp=CAU"
                class="card-img-top"
                alt="..."
              ></img>
                <a href="#" class="btn btn-primary">
                  Know more
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://pbs.twimg.com/card_img/1679478198315413504/c2HEPj5H?format=png&name=medium"
                class="card-img-top"
                alt="nothing"
              ></img>
              <div class="card-body">
                <h5 class="card-title">React</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Know more
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              
              <div class="card-body">
                <h5 class="card-title">Bootstrap</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <img
                src="https://www.bootstrapdash.com/wp-content/uploads/2017/08/bootstrap-4-beta-whats-new.jpg"
                class="card-img-top"
                alt="nothing"
              ></img>
                <a href="#" class="btn btn-primary">
                  Know more
                </a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              
              <div class="card-body">
                <h5 class="card-title">JS AND CSS</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <img
                src="https://codeberryschool.com/blog/wp-content/uploads/2021/08/cover-1.png"
                class="card-img-top"
                alt="nothing"
              ></img>
                <a href="#" class="btn btn-primary">
                  Know more
                </a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              
              <div class="card-body">
                <h5 class="card-title">HTML</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <img
                src="https://community-cdn-digitalocean-com.global.ssl.fastly.net/vUuUtKqDrY9gAbaD2czK9KrN"
                class="card-img-top"
                alt="nothing"
                width='500px'
              ></img>
                <a href="#" class="btn btn-primary">
                  Know more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default Courses;