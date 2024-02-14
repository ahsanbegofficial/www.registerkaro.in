import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import parse from "html-react-parser";
import {
  WhatsappLogo,
  EnvelopeOpen,
  TelegramLogo,
  TwitterLogo,
  LinkedinLogo,
  Printer,
  CaretRight,
} from "phosphor-react";
import data from "../../assets/data/blog.json";
import SinglePageSidebar from "./SinglePageSidebar";
import Image from "next/image";

interface BlogDetailsProps {
  slug_name: string;
}

interface BlogData {
  title: {
    rendered: string;
  };
  yoast_head_json: {
    author: string;
  };
  date: string;
  content: {
    rendered: string;
  };
}

interface BlogListData {
  id: number;
  image: string;
  subtitle: string;
  title: string;
  date: string;
  createBy: string;
}


const BlogDetails = ({ result }: { result: any }) => {
 
};

export default BlogDetails;