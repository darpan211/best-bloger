import axios from "axios";
import HtmlTableToJson from "html-table-to-json";
import { blogUrl } from "@/utils/blog";

export const fetchAllBlog = async () => {
    return await axios.get(`${blogUrl}/blogs`).then((res) => {
        const jsonTables = HtmlTableToJson.parse(res.data);
        return jsonTables?.results[0].reverse()
    }).catch((e) => {
        console.log("e is", e);
        return e
    })
}

export const fetchBlogBySlug = async (slug) => {
    return await axios.get(`${blogUrl}/blogs/octopus/${slug}`).then((res) => {
        const jsonTables = HtmlTableToJson.parse(res.data);
        return jsonTables?.results[0]
    }).catch((e) => {
        console.log("e is", e);
        return e
    })
}


export const fetchAllCollection = async () => {
    return await axios.get(`${blogUrl}/collection`).then((res) => {
        const jsonTables = HtmlTableToJson.parse(res.data);
        const secondElement = jsonTables?.results[0].filter((item) => item.collection !== "Others");
        secondElement.push({ "collection": "Others" });
        console.log("secondElement", secondElement);
        return secondElement
    }).catch((e) => {
        console.log("e is", e);
        return e
    })
}
