import { css } from "@emotion/react";
import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import ExternalLink from "natrosity-components/ExternalLink";

const SOCIAL_MEDIA_DATA = {
  instagram: { link: "https://www.instagram.com/natrositymusic/" },
  twitter: { link: "https://twitter.com/natrosity" },
  facebook: { link: "https://www.facebook.com/Natrosity/" },
  youtube: { link: "https://www.youtube.com/channel/UCgzaJdUdYccnqplV4EqVsQA" },
};

const SocialMediaList = () => {
  const data = useStaticQuery(graphql`
    fragment iconImage on File {
      childImageSharp {
        fixed(width: 32, height: 32) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    query {
      instagramImage: file(
        relativePath: { eq: "instagram/glyph-logo_May2016.png" }
      ) {
        ...iconImage
      }

      twitterImage: file(
        relativePath: { eq: "twitter/Twitter_Social_Icon_Circle_White.png" }
      ) {
        ...iconImage
      }

      facebookImage: file(
        relativePath: { eq: "facebook/f_logo_RGB-White_512.png" }
      ) {
        ...iconImage
      }

      youtubeImage: file(
        relativePath: { eq: "youtube/yt_icon_mono_dark.png" }
      ) {
        childImageSharp {
          fixed(height: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div
      css={css`
        .gatsby-image-wrapper {
          margin: 10px;
        }
      `}
    >
      <ExternalLink href={SOCIAL_MEDIA_DATA.instagram.link} target="_blank">
        <Img fixed={data.instagramImage.childImageSharp.fixed} />
      </ExternalLink>
      <ExternalLink href={SOCIAL_MEDIA_DATA.twitter.link} target="_blank">
        <Img fixed={data.twitterImage.childImageSharp.fixed} />
      </ExternalLink>
      <ExternalLink href={SOCIAL_MEDIA_DATA.facebook.link} target="_blank">
        <Img fixed={data.facebookImage.childImageSharp.fixed} />
      </ExternalLink>
      <ExternalLink href={SOCIAL_MEDIA_DATA.youtube.link} target="_blank">
        <Img fixed={data.youtubeImage.childImageSharp.fixed} />
      </ExternalLink>
    </div>
  );
};

export default SocialMediaList;
