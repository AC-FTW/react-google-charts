(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    "./src/docs/CalendarChart.mdx": function(e, a, n) {
      "use strict";
      n.r(a);
      var t = n("./node_modules/react/index.js"),
        o = n.n(t),
        r = n("./node_modules/@mdx-js/tag/dist/index.js"),
        p = n("./node_modules/docz/dist/index.m.js"),
        m = n("./src/index.tsx");
      a.default = function(e) {
        var a = e.components;
        return o.a.createElement(
          r.MDXTag,
          { name: "wrapper", components: a },
          o.a.createElement(
            r.MDXTag,
            { name: "h1", components: a, props: { id: "usage" } },
            o.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h1",
                props: { "aria-hidden": !0, href: "#usage" }
              },
              o.a.createElement(
                r.MDXTag,
                {
                  name: "span",
                  components: a,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Usage"
          ),
          o.a.createElement(
            r.MDXTag,
            { name: "h2", components: a, props: { id: "simple-example" } },
            o.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#simple-example" }
              },
              o.a.createElement(
                r.MDXTag,
                {
                  name: "span",
                  components: a,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Simple Example"
          ),
          o.a.createElement(
            p.d,
            {
              __position: 0,
              __code:
                "<Chart\n  width={1000}\n  height={350}\n  chartType=\"Calendar\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    [{ type: 'date', id: 'Date' }, { type: 'number', id: 'Won/Loss' }],\n    [new Date(2012, 3, 13), 37032],\n    [new Date(2012, 3, 14), 38024],\n    [new Date(2012, 3, 15), 38024],\n    [new Date(2012, 3, 16), 38108],\n    [new Date(2012, 3, 17), 38229],\n\n    [new Date(2013, 1, 4), 38177],\n    [new Date(2013, 1, 5), 38705],\n    [new Date(2013, 1, 12), 38210],\n    [new Date(2013, 1, 13), 38029],\n    [new Date(2013, 1, 19), 38823],\n    [new Date(2013, 1, 23), 38345],\n    [new Date(2013, 1, 24), 38436],\n    [new Date(2013, 2, 10), 38447],\n  ]}\n  options={{\n    title: 'Red Sox Attendance',\n  }}\n/>"
            },
            o.a.createElement(m.a, {
              width: 1e3,
              height: 350,
              chartType: "Calendar",
              loader: o.a.createElement("div", null, "Loading Chart"),
              data: [
                [
                  { type: "date", id: "Date" },
                  { type: "number", id: "Won/Loss" }
                ],
                [new Date(2012, 3, 13), 37032],
                [new Date(2012, 3, 14), 38024],
                [new Date(2012, 3, 15), 38024],
                [new Date(2012, 3, 16), 38108],
                [new Date(2012, 3, 17), 38229],
                [new Date(2013, 1, 4), 38177],
                [new Date(2013, 1, 5), 38705],
                [new Date(2013, 1, 12), 38210],
                [new Date(2013, 1, 13), 38029],
                [new Date(2013, 1, 19), 38823],
                [new Date(2013, 1, 23), 38345],
                [new Date(2013, 1, 24), 38436],
                [new Date(2013, 2, 10), 38447]
              ],
              options: { title: "Red Sox Attendance" }
            })
          ),
          o.a.createElement(
            r.MDXTag,
            {
              name: "h2",
              components: a,
              props: { id: "with-negative-values" }
            },
            o.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h2",
                props: { "aria-hidden": !0, href: "#with-negative-values" }
              },
              o.a.createElement(
                r.MDXTag,
                {
                  name: "span",
                  components: a,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "With negative values"
          ),
          o.a.createElement(
            p.d,
            {
              __position: 1,
              __code:
                "<Chart\n  width={1000}\n  height={200}\n  chartType=\"Calendar\"\n  loader={<div>Loading Chart</div>}\n  data={[\n    [{ type: 'date', id: 'Date' }, { type: 'number', id: 'Won/Loss' }],\n    [new Date(2013, 2, 4), 10],\n    [new Date(2013, 2, 5), 3],\n    [new Date(2013, 2, 7), -1],\n    [new Date(2013, 2, 8), 2],\n    [new Date(2013, 2, 12), -1],\n    [new Date(2013, 2, 13), 1],\n    [new Date(2013, 2, 15), 1],\n    [new Date(2013, 2, 16), -4],\n    [new Date(2013, 1, 4), 10],\n    [new Date(2013, 1, 5), 3],\n    [new Date(2013, 1, 7), -1],\n    [new Date(2013, 1, 8), 2],\n    [new Date(2013, 1, 12), -1],\n    [new Date(2013, 1, 13), 1],\n    [new Date(2013, 1, 15), 1],\n    [new Date(2013, 1, 16), -4],\n  ]}\n  options={{\n    title: 'Red Sox Attendance',\n  }}\n/>"
            },
            o.a.createElement(m.a, {
              width: 1e3,
              height: 200,
              chartType: "Calendar",
              loader: o.a.createElement("div", null, "Loading Chart"),
              data: [
                [
                  { type: "date", id: "Date" },
                  { type: "number", id: "Won/Loss" }
                ],
                [new Date(2013, 2, 4), 10],
                [new Date(2013, 2, 5), 3],
                [new Date(2013, 2, 7), -1],
                [new Date(2013, 2, 8), 2],
                [new Date(2013, 2, 12), -1],
                [new Date(2013, 2, 13), 1],
                [new Date(2013, 2, 15), 1],
                [new Date(2013, 2, 16), -4],
                [new Date(2013, 1, 4), 10],
                [new Date(2013, 1, 5), 3],
                [new Date(2013, 1, 7), -1],
                [new Date(2013, 1, 8), 2],
                [new Date(2013, 1, 12), -1],
                [new Date(2013, 1, 13), 1],
                [new Date(2013, 1, 15), 1],
                [new Date(2013, 1, 16), -4]
              ],
              options: { title: "Red Sox Attendance" }
            })
          ),
          o.a.createElement(
            r.MDXTag,
            { name: "h1", components: a, props: { id: "data-format" } },
            o.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h1",
                props: { "aria-hidden": !0, href: "#data-format" }
              },
              o.a.createElement(
                r.MDXTag,
                {
                  name: "span",
                  components: a,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Data Format"
          ),
          o.a.createElement(
            r.MDXTag,
            { name: "p", components: a },
            o.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "p",
                props: {
                  href:
                    "https://developers.google.com/chart/interactive/docs/gallery/calendar#data-format"
                }
              },
              "Complete Data Format Reference"
            )
          ),
          o.a.createElement(
            r.MDXTag,
            { name: "h1", components: a, props: { id: "reference" } },
            o.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "h1",
                props: { "aria-hidden": !0, href: "#reference" }
              },
              o.a.createElement(
                r.MDXTag,
                {
                  name: "span",
                  components: a,
                  parentName: "a",
                  props: { className: "icon-link" }
                },
                "#"
              )
            ),
            "Reference"
          ),
          o.a.createElement(
            r.MDXTag,
            { name: "p", components: a },
            o.a.createElement(
              r.MDXTag,
              {
                name: "a",
                components: a,
                parentName: "p",
                props: {
                  href:
                    "https://developers.google.com/chart/interactive/docs/gallery/calendar"
                }
              },
              "Original Google Charts Docs"
            )
          )
        );
      };
    }
  }
]);
