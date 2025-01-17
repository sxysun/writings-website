/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react"
import clsx from "clsx"
import Translate from "@docusaurus/Translate"
import Tag from "@theme/Tag"
import type { Props } from "@theme/TagsListInline"

import styles from "./styles.module.css"

export default function TagsListInline({ tags }: Props) {
  return (
    <>
      <b>
        <Translate
          id="theme.tags.tagsListLabel"
          description="The label alongside a tag list">
          Filter:
        </Translate>
      </b>
      <ul className={clsx(styles.tags, "padding--none", "margin-left--sm")}>
        {tags.map(({ 
          label,
          permalink: tagPermalink,
          // @ts-ignore
          // count 
        }) => (
          <li key={tagPermalink}
            className={styles.tag}>
            <Tag name={label}
              permalink={tagPermalink} />
          </li>
        ))}
      </ul>
    </>
  )
}
