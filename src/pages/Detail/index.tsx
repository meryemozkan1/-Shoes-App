import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getShoe } from "../../api";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { Shoe } from "../../types";
import Head from "./Head";
import Color from "./color";
import Size from "./size";
import xss from "xss";

const Detail = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery<Shoe>({
    queryKey: ["shoe"],
    queryFn: () => getShoe(id as string),
  });

  return (
    <div className="mt-8">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        data && (
          <section className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
            <div className="lg:col-span-2 grid grid-cols-2 gap-4 rounded-[48px] h-fit">
              {data.picture.map((url, i) => (
                <img key={i} src={url} />
              ))}
            </div>
            <div className="flex flex-col gap-8">
              <Head data={data} />
              <Color data={data.color} />
              <Size data={data.size} />
              {/* //"dangerouslySetInnerHTML" GÜVENLİ DEĞİL kaynağın belli olmadığı
              noktada kullanılmamalı  "XSS kütüphanesiyle güvenli hale getirilebiliyor." */}
              <div>
                <h2>Bu ürün Hakkında</h2>

                <p
                  className="font-open my-4"
                  dangerouslySetInnerHTML={{ __html: xss(data.description) }}
                />
              </div>
            </div>
          </section>
        )
      )}
    </div>
  );
};

export default Detail;
