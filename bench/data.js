window.BENCHMARK_DATA = {
  "lastUpdate": 1683457691739,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "mesejoleon@gmail.com",
            "name": "Daniel Mesejo",
            "username": "mesejo"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "12b956914568b88a6e5d2572ecd2b454e9892735",
          "message": "fix(pandas): fix string translate function\n\n- use list comprehension in execute_substring_series_series, which is\nslightly faster and removes the use of the stateful function\n- use str.contains in execute_string_like_series_string, which is\nsupported by pandas\n- remove the duplicated implementation of EndsWith and StartsWith\n\nfixes #6157",
          "timestamp": "2023-05-07T04:03:03-07:00",
          "tree_id": "5c5f96dacb1b7d3d00c9c9ecb561536370d1d9cc",
          "url": "https://github.com/ibis-project/ibis/commit/12b956914568b88a6e5d2572ecd2b454e9892735"
        },
        "date": 1683457603986,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 94.16430205033262,
            "unit": "iter/sec",
            "range": "stddev: 0.006201672434016415",
            "extra": "mean: 10.619735698412343 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 271.32028336422735,
            "unit": "iter/sec",
            "range": "stddev: 0.00030657437295118165",
            "extra": "mean: 3.6856809509430377 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 430.8894218917339,
            "unit": "iter/sec",
            "range": "stddev: 0.0000390839700006274",
            "extra": "mean: 2.3207810384615613 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 50.33511452752288,
            "unit": "iter/sec",
            "range": "stddev: 0.00012890898048808914",
            "extra": "mean: 19.86684662162052 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.36539831912396,
            "unit": "iter/sec",
            "range": "stddev: 0.0006411649748411012",
            "extra": "mean: 26.762728218748588 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 252.88249481503334,
            "unit": "iter/sec",
            "range": "stddev: 0.00032615245068014605",
            "extra": "mean: 3.9544057833320307 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 96.40166193752191,
            "unit": "iter/sec",
            "range": "stddev: 0.0006319774872491067",
            "extra": "mean: 10.373265148147569 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2370.121862674237,
            "unit": "iter/sec",
            "range": "stddev: 0.00008423605343992177",
            "extra": "mean: 421.9192336683009 usec\nrounds: 398"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.64030985783199,
            "unit": "iter/sec",
            "range": "stddev: 0.00016902842578999153",
            "extra": "mean: 16.767183174999545 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6714405566267996,
            "unit": "iter/sec",
            "range": "stddev: 0.0014583334804018726",
            "extra": "mean: 598.2863081999994 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 161.6066688196754,
            "unit": "iter/sec",
            "range": "stddev: 0.00006061297204562975",
            "extra": "mean: 6.1878634545448366 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.442362497401218,
            "unit": "iter/sec",
            "range": "stddev: 0.00015640252709763812",
            "extra": "mean: 118.45025611110947 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 281.696804030178,
            "unit": "iter/sec",
            "range": "stddev: 0.00022567558620591616",
            "extra": "mean: 3.5499160291959533 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 234.31231086745703,
            "unit": "iter/sec",
            "range": "stddev: 0.0002501297902232005",
            "extra": "mean: 4.267808192825464 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 685.9336919719507,
            "unit": "iter/sec",
            "range": "stddev: 0.00005797587526324205",
            "extra": "mean: 1.45786686337736 msec\nrounds: 527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2317.120819044231,
            "unit": "iter/sec",
            "range": "stddev: 0.00008163244283916616",
            "extra": "mean: 431.5700725577534 usec\nrounds: 1392"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13725.63032616718,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015632930437215312",
            "extra": "mean: 72.85639903134746 usec\nrounds: 8052"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 38.91340772266172,
            "unit": "iter/sec",
            "range": "stddev: 0.016410915458110843",
            "extra": "mean: 25.698083476190583 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1178.8557315487828,
            "unit": "iter/sec",
            "range": "stddev: 0.00004470387552604814",
            "extra": "mean: 848.2802205883141 usec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.18115611774162885,
            "unit": "iter/sec",
            "range": "stddev: 0.098761085633652",
            "extra": "mean: 5.5201006317999965 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.503648862918464,
            "unit": "iter/sec",
            "range": "stddev: 0.002119569563211299",
            "extra": "mean: 399.41703280000525 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 69.50002692242285,
            "unit": "iter/sec",
            "range": "stddev: 0.00017963675876654214",
            "extra": "mean: 14.388483634923158 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 420.4227645193502,
            "unit": "iter/sec",
            "range": "stddev: 0.000030053384629936274",
            "extra": "mean: 2.378558166666483 msec\nrounds: 288"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 86.61307025131626,
            "unit": "iter/sec",
            "range": "stddev: 0.0004815914749284313",
            "extra": "mean: 11.5456015714303 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 101.53839201868715,
            "unit": "iter/sec",
            "range": "stddev: 0.0006573051241554258",
            "extra": "mean: 9.848491591396876 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 280.0213662008888,
            "unit": "iter/sec",
            "range": "stddev: 0.00026962501081929653",
            "extra": "mean: 3.571156064150457 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 104.49618659686806,
            "unit": "iter/sec",
            "range": "stddev: 0.00066021226252788",
            "extra": "mean: 9.569727207920636 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 30.040848043125354,
            "unit": "iter/sec",
            "range": "stddev: 0.00009056774527919413",
            "extra": "mean: 33.28800833333476 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 102.83965964137859,
            "unit": "iter/sec",
            "range": "stddev: 0.0006294143778642203",
            "extra": "mean: 9.723875044775427 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11874.850692274365,
            "unit": "iter/sec",
            "range": "stddev: 0.000020495796898096596",
            "extra": "mean: 84.21158513181037 usec\nrounds: 5838"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.726593606010404,
            "unit": "iter/sec",
            "range": "stddev: 0.00013040135415495185",
            "extra": "mean: 53.399994736845485 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2254.0082831874674,
            "unit": "iter/sec",
            "range": "stddev: 0.00008872219960604367",
            "extra": "mean: 443.65409278171194 usec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 101.54686264787969,
            "unit": "iter/sec",
            "range": "stddev: 0.0006899335356545991",
            "extra": "mean: 9.847670070000731 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 100.55684878921168,
            "unit": "iter/sec",
            "range": "stddev: 0.0006453850643359218",
            "extra": "mean: 9.944623484534707 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 104.58851213197501,
            "unit": "iter/sec",
            "range": "stddev: 0.0006207482654327079",
            "extra": "mean: 9.561279528846821 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 181.27994676086809,
            "unit": "iter/sec",
            "range": "stddev: 0.0034726700420566236",
            "extra": "mean: 5.516329951923091 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 105.21877605527446,
            "unit": "iter/sec",
            "range": "stddev: 0.0000443629751810757",
            "extra": "mean: 9.504007150536241 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 140688.28296143105,
            "unit": "iter/sec",
            "range": "stddev: 3.532700639084602e-7",
            "extra": "mean: 7.1079124639977636 usec\nrounds: 62500"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 266.34858322758413,
            "unit": "iter/sec",
            "range": "stddev: 0.0002495802383936641",
            "extra": "mean: 3.754478390243737 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 109.86664507205757,
            "unit": "iter/sec",
            "range": "stddev: 0.00007836889645452284",
            "extra": "mean: 9.101943536585978 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 101.39269320137777,
            "unit": "iter/sec",
            "range": "stddev: 0.0007157913227205457",
            "extra": "mean: 9.862643632651938 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.684884838020743,
            "unit": "iter/sec",
            "range": "stddev: 0.0006327923673988795",
            "extra": "mean: 36.120793200001344 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2375.669182337237,
            "unit": "iter/sec",
            "range": "stddev: 0.00008029549927643877",
            "extra": "mean: 420.93402879275357 usec\nrounds: 1424"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6164273.217471165,
            "unit": "iter/sec",
            "range": "stddev: 8.965006784415302e-9",
            "extra": "mean: 162.22512609664858 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 257.90198623568216,
            "unit": "iter/sec",
            "range": "stddev: 0.0038525064073317164",
            "extra": "mean: 3.8774420259259115 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2388.6967788719758,
            "unit": "iter/sec",
            "range": "stddev: 0.0000811475350287534",
            "extra": "mean: 418.6383172803683 usec\nrounds: 1412"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 101.22641839379966,
            "unit": "iter/sec",
            "range": "stddev: 0.0007233284330657013",
            "extra": "mean: 9.878844039603521 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2307.2151891655317,
            "unit": "iter/sec",
            "range": "stddev: 0.00007898764926628404",
            "extra": "mean: 433.4229441171795 usec\nrounds: 340"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 116.25220216000248,
            "unit": "iter/sec",
            "range": "stddev: 0.00011779716210448333",
            "extra": "mean: 8.601987587501014 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 100.47137049898633,
            "unit": "iter/sec",
            "range": "stddev: 0.0007510580186924385",
            "extra": "mean: 9.95308409782356 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 47.00271451189908,
            "unit": "iter/sec",
            "range": "stddev: 0.00023134478393108598",
            "extra": "mean: 21.275366973684953 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2347.673218387388,
            "unit": "iter/sec",
            "range": "stddev: 0.00007669770276024244",
            "extra": "mean: 425.95366006130024 usec\nrounds: 1312"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 96.2940873047774,
            "unit": "iter/sec",
            "range": "stddev: 0.0007472932443367164",
            "extra": "mean: 10.384853608248358 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 56.26378251683348,
            "unit": "iter/sec",
            "range": "stddev: 0.00014810547346357108",
            "extra": "mean: 17.773422888886138 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3391299480053884,
            "unit": "iter/sec",
            "range": "stddev: 0.0006404460667181977",
            "extra": "mean: 746.7535181999949 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2586815.697790606,
            "unit": "iter/sec",
            "range": "stddev: 1.6414106620165844e-8",
            "extra": "mean: 386.57566553882054 nsec\nrounds: 93458"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 276.19205567266306,
            "unit": "iter/sec",
            "range": "stddev: 0.0002483938316932203",
            "extra": "mean: 3.6206689492371886 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 102.9180562319389,
            "unit": "iter/sec",
            "range": "stddev: 0.00011265190236221632",
            "extra": "mean: 9.716468000001603 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.34939491920328,
            "unit": "iter/sec",
            "range": "stddev: 0.0008249633973701619",
            "extra": "mean: 10.065486567011892 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2252.9831952921663,
            "unit": "iter/sec",
            "range": "stddev: 0.00009235795135915409",
            "extra": "mean: 443.8559515621776 usec\nrounds: 1920"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5718449.4712491715,
            "unit": "iter/sec",
            "range": "stddev: 1.0453827163558108e-8",
            "extra": "mean: 174.87257779025404 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9173791897166557,
            "unit": "iter/sec",
            "range": "stddev: 0.00495298254990407",
            "extra": "mean: 1.090061788199995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1743.8640375945286,
            "unit": "iter/sec",
            "range": "stddev: 0.0000048295375322419874",
            "extra": "mean: 573.4392007873455 usec\nrounds: 1270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4642.459880266981,
            "unit": "iter/sec",
            "range": "stddev: 0.000026048747488915832",
            "extra": "mean: 215.40304618475056 usec\nrounds: 996"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12940816.537360042,
            "unit": "iter/sec",
            "range": "stddev: 3.592651086044426e-9",
            "extra": "mean: 77.27487652053046 nsec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 275.1786509248274,
            "unit": "iter/sec",
            "range": "stddev: 0.0002662884053040002",
            "extra": "mean: 3.6340028437495953 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8078.062020621245,
            "unit": "iter/sec",
            "range": "stddev: 0.000017061884974527133",
            "extra": "mean: 123.79206763296115 usec\nrounds: 4554"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 102.49604784409114,
            "unit": "iter/sec",
            "range": "stddev: 0.0006521885918103294",
            "extra": "mean: 9.756473747369467 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2571615.38861711,
            "unit": "iter/sec",
            "range": "stddev: 1.580883396044091e-8",
            "extra": "mean: 388.8606377244639 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4585163.647271653,
            "unit": "iter/sec",
            "range": "stddev: 1.0917213500349636e-8",
            "extra": "mean: 218.0947239678389 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 192.97855992302422,
            "unit": "iter/sec",
            "range": "stddev: 0.0003260901930836026",
            "extra": "mean: 5.181922802195656 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6287524.829260726,
            "unit": "iter/sec",
            "range": "stddev: 9.163470402224142e-9",
            "extra": "mean: 159.04509757897492 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 100.41881311165396,
            "unit": "iter/sec",
            "range": "stddev: 0.0005854459104407502",
            "extra": "mean: 9.958293361704216 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 540.698982815878,
            "unit": "iter/sec",
            "range": "stddev: 0.00002036475825950214",
            "extra": "mean: 1.849457890214907 msec\nrounds: 419"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 97.12287011817817,
            "unit": "iter/sec",
            "range": "stddev: 0.0006411218012775125",
            "extra": "mean: 10.296236085107552 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 189.20761182897056,
            "unit": "iter/sec",
            "range": "stddev: 0.0001520951553227779",
            "extra": "mean: 5.285199629832677 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9207906612322384,
            "unit": "iter/sec",
            "range": "stddev: 0.004579251016407966",
            "extra": "mean: 1.0860231778000013 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1617695.0797993997,
            "unit": "iter/sec",
            "range": "stddev: 1.7278310140479338e-7",
            "extra": "mean: 618.1634675701702 nsec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1076275.0221492348,
            "unit": "iter/sec",
            "range": "stddev: 1.3581345064437303e-7",
            "extra": "mean: 929.1305469517265 nsec\nrounds: 77520"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1770282.4852522986,
            "unit": "iter/sec",
            "range": "stddev: 9.623767418830653e-8",
            "extra": "mean: 564.8815984627905 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7291098.65799634,
            "unit": "iter/sec",
            "range": "stddev: 7.408953668519111e-9",
            "extra": "mean: 137.15354117491947 nsec\nrounds: 60607"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 281.85700725777474,
            "unit": "iter/sec",
            "range": "stddev: 0.00022857413711474965",
            "extra": "mean: 3.5478983110235096 msec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 171.32867933706035,
            "unit": "iter/sec",
            "range": "stddev: 0.00010853537150644567",
            "extra": "mean: 5.836734421051996 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 157.8822299413405,
            "unit": "iter/sec",
            "range": "stddev: 0.000035989951115788596",
            "extra": "mean: 6.333835038759837 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 123.84157128400946,
            "unit": "iter/sec",
            "range": "stddev: 0.00005518421961763479",
            "extra": "mean: 8.074832946900125 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.23918133707727,
            "unit": "iter/sec",
            "range": "stddev: 0.0007546943659688464",
            "extra": "mean: 9.9761389375006 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 739.6853357674707,
            "unit": "iter/sec",
            "range": "stddev: 0.000012457453432974334",
            "extra": "mean: 1.3519262200357618 msec\nrounds: 559"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.30040832676853,
            "unit": "iter/sec",
            "range": "stddev: 0.00030001246477005084",
            "extra": "mean: 10.070452043956285 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7954862020449099,
            "unit": "iter/sec",
            "range": "stddev: 0.001662420099943488",
            "extra": "mean: 1.2570928287999947 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 82.20813259442752,
            "unit": "iter/sec",
            "range": "stddev: 0.016194587490402028",
            "extra": "mean: 12.164246631576995 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9835.564350760145,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021008245787891703",
            "extra": "mean: 101.67184762740276 usec\nrounds: 5480"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2250.548447995269,
            "unit": "iter/sec",
            "range": "stddev: 0.00009726250875973849",
            "extra": "mean: 444.3361354387969 usec\nrounds: 1425"
          }
        ]
      }
    ]
  }
}