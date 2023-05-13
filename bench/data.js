window.BENCHMARK_DATA = {
  "lastUpdate": 1683938285451,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "79cef8e64c524e499bb9556adcc55a44f30b9a5d",
          "message": "chore(flake/nixpkgs): `4487c14e` -> `a56161ab`",
          "timestamp": "2023-05-13T00:31:05Z",
          "tree_id": "41d9162d2476cce3e412ad841957894b90f5951d",
          "url": "https://github.com/ibis-project/ibis/commit/79cef8e64c524e499bb9556adcc55a44f30b9a5d"
        },
        "date": 1683938175596,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 62.756852903642645,
            "unit": "iter/sec",
            "range": "stddev: 0.010300778351325625",
            "extra": "mean: 15.934514777779054 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 64.51573200203877,
            "unit": "iter/sec",
            "range": "stddev: 0.00148030610064699",
            "extra": "mean: 15.500095387097193 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5150841952267932,
            "unit": "iter/sec",
            "range": "stddev: 0.026379359111468728",
            "extra": "mean: 1.9414301763999902 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 0.9083913088817815,
            "unit": "iter/sec",
            "range": "stddev: 0.009760453520317349",
            "extra": "mean: 1.1008471681999992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3919900.66428832,
            "unit": "iter/sec",
            "range": "stddev: 4.971870041223207e-7",
            "extra": "mean: 255.10850545533583 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 47.880915041021105,
            "unit": "iter/sec",
            "range": "stddev: 0.02499941315116465",
            "extra": "mean: 20.885148062506076 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 147.6343578588996,
            "unit": "iter/sec",
            "range": "stddev: 0.0009565842724748252",
            "extra": "mean: 6.773491038960879 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 66.8137964528827,
            "unit": "iter/sec",
            "range": "stddev: 0.0018183538634392658",
            "extra": "mean: 14.966968696430882 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4866835.865304134,
            "unit": "iter/sec",
            "range": "stddev: 5.620765133714112e-7",
            "extra": "mean: 205.47230843151092 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1414.740832371236,
            "unit": "iter/sec",
            "range": "stddev: 0.00016861064703128006",
            "extra": "mean: 706.8432444435126 usec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1235.900584880789,
            "unit": "iter/sec",
            "range": "stddev: 0.00010223900324424993",
            "extra": "mean: 809.1265691054404 usec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 57.74844619233271,
            "unit": "iter/sec",
            "range": "stddev: 0.0180977310849257",
            "extra": "mean: 17.316483229167307 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 36.311537498815014,
            "unit": "iter/sec",
            "range": "stddev: 0.0025963183438560233",
            "extra": "mean: 27.539456296297946 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 65.91001958085089,
            "unit": "iter/sec",
            "range": "stddev: 0.00203216234845228",
            "extra": "mean: 15.172200013888848 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 69.08249353187585,
            "unit": "iter/sec",
            "range": "stddev: 0.0018447441484307958",
            "extra": "mean: 14.475447380002038 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 68.64365854079779,
            "unit": "iter/sec",
            "range": "stddev: 0.0016829486502162494",
            "extra": "mean: 14.567988088887457 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 25.329083095004457,
            "unit": "iter/sec",
            "range": "stddev: 0.0035035403141100846",
            "extra": "mean: 39.48030792307778 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1439.2629966558993,
            "unit": "iter/sec",
            "range": "stddev: 0.0002313649428741542",
            "extra": "mean: 694.800048582838 usec\nrounds: 988"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1404.346310497836,
            "unit": "iter/sec",
            "range": "stddev: 0.0003203854515779807",
            "extra": "mean: 712.0750718855832 usec\nrounds: 626"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 151.06764513905526,
            "unit": "iter/sec",
            "range": "stddev: 0.01348762622213506",
            "extra": "mean: 6.619551122806717 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1524.520141235944,
            "unit": "iter/sec",
            "range": "stddev: 0.00017276919050275013",
            "extra": "mean: 655.9441052640274 usec\nrounds: 304"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7028.599376864596,
            "unit": "iter/sec",
            "range": "stddev: 0.0001410364604385139",
            "extra": "mean: 142.2758570209037 usec\nrounds: 3504"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1380.8006066016735,
            "unit": "iter/sec",
            "range": "stddev: 0.0003337785878379561",
            "extra": "mean: 724.2175265704204 usec\nrounds: 1035"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4094831.820921998,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010070208014351526",
            "extra": "mean: 244.2102737627633 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 158.77059503509966,
            "unit": "iter/sec",
            "range": "stddev: 0.004237739871388396",
            "extra": "mean: 6.298395491803306 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 12.798790210566768,
            "unit": "iter/sec",
            "range": "stddev: 0.0042119629749701815",
            "extra": "mean: 78.13238466666898 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 463.67401510123204,
            "unit": "iter/sec",
            "range": "stddev: 0.00024066781878690028",
            "extra": "mean: 2.1566876025642157 msec\nrounds: 312"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 180.8957604247912,
            "unit": "iter/sec",
            "range": "stddev: 0.0007703082149163357",
            "extra": "mean: 5.528045531038068 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 116.72140775933838,
            "unit": "iter/sec",
            "range": "stddev: 0.0006956350287171074",
            "extra": "mean: 8.567408663043599 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1417262.220134346,
            "unit": "iter/sec",
            "range": "stddev: 0.000005526275167953954",
            "extra": "mean: 705.5857312736435 nsec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 106389.003855558,
            "unit": "iter/sec",
            "range": "stddev: 0.000011619326939769066",
            "extra": "mean: 9.399467649473229 usec\nrounds: 30865"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 74.93955058564431,
            "unit": "iter/sec",
            "range": "stddev: 0.0010434015303251109",
            "extra": "mean: 13.344088564517806 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 78.17627832843324,
            "unit": "iter/sec",
            "range": "stddev: 0.0017435473303758454",
            "extra": "mean: 12.79160406944434 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 28.604365787306303,
            "unit": "iter/sec",
            "range": "stddev: 0.002848801614497182",
            "extra": "mean: 34.95969837037141 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 159.91952272341894,
            "unit": "iter/sec",
            "range": "stddev: 0.0013350074816730656",
            "extra": "mean: 6.253145225611395 msec\nrounds: 164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 137.70366966998003,
            "unit": "iter/sec",
            "range": "stddev: 0.0013734611051060192",
            "extra": "mean: 7.261970595239729 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 65.13240743911423,
            "unit": "iter/sec",
            "range": "stddev: 0.004583339323113704",
            "extra": "mean: 15.35334005479223 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 72.92202892959048,
            "unit": "iter/sec",
            "range": "stddev: 0.0015303400274870706",
            "extra": "mean: 13.7132772452827 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 738572.4511964438,
            "unit": "iter/sec",
            "range": "stddev: 0.000008168770221542562",
            "extra": "mean: 1.3539633090566254 usec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 486.68435051036846,
            "unit": "iter/sec",
            "range": "stddev: 0.0005047150329046081",
            "extra": "mean: 2.054719858880475 msec\nrounds: 411"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 7565.3398412578135,
            "unit": "iter/sec",
            "range": "stddev: 0.00008493148102573997",
            "extra": "mean: 132.18176856331942 usec\nrounds: 3919"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 68.60956234749949,
            "unit": "iter/sec",
            "range": "stddev: 0.0017415001261239997",
            "extra": "mean: 14.575227793104347 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 44.956314145376886,
            "unit": "iter/sec",
            "range": "stddev: 0.0037845799615842867",
            "extra": "mean: 22.24381644736851 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 37.28203603547365,
            "unit": "iter/sec",
            "range": "stddev: 0.002955356248542021",
            "extra": "mean: 26.822569428571594 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5073012531321055,
            "unit": "iter/sec",
            "range": "stddev: 0.020150588207331236",
            "extra": "mean: 1.9712153160000014 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 260.56216598248267,
            "unit": "iter/sec",
            "range": "stddev: 0.0009957424464921403",
            "extra": "mean: 3.8378557233333295 msec\nrounds: 300"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 176.83239786574705,
            "unit": "iter/sec",
            "range": "stddev: 0.0010223860783623894",
            "extra": "mean: 5.655072328766418 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 155.5031442338421,
            "unit": "iter/sec",
            "range": "stddev: 0.00138320268101899",
            "extra": "mean: 6.430738136691453 msec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 56.187556173210226,
            "unit": "iter/sec",
            "range": "stddev: 0.0025029586724318316",
            "extra": "mean: 17.797535043476262 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 66.75755226467153,
            "unit": "iter/sec",
            "range": "stddev: 0.001672494549340269",
            "extra": "mean: 14.979578580642562 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 354.140071083592,
            "unit": "iter/sec",
            "range": "stddev: 0.0003014951805222562",
            "extra": "mean: 2.823741456142527 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1364723.291562675,
            "unit": "iter/sec",
            "range": "stddev: 0.00000525210111203932",
            "extra": "mean: 732.7492731914549 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 127.27849311700857,
            "unit": "iter/sec",
            "range": "stddev: 0.0008688404228170113",
            "extra": "mean: 7.856786920636219 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 171.74682857794352,
            "unit": "iter/sec",
            "range": "stddev: 0.001022404845445424",
            "extra": "mean: 5.822523817644598 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.756080726077442,
            "unit": "iter/sec",
            "range": "stddev: 0.004176092747506369",
            "extra": "mean: 173.72932166666524 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3146260.0520635135,
            "unit": "iter/sec",
            "range": "stddev: 4.3236895722138273e-7",
            "extra": "mean: 317.83768139043286 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 805.3440910818128,
            "unit": "iter/sec",
            "range": "stddev: 0.0001724009503127416",
            "extra": "mean: 1.2417052674425255 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 2748.1507239181933,
            "unit": "iter/sec",
            "range": "stddev: 0.00009901773100049241",
            "extra": "mean: 363.88106056069716 usec\nrounds: 677"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9351.83613978666,
            "unit": "iter/sec",
            "range": "stddev: 0.00007776661288271393",
            "extra": "mean: 106.93087272408226 usec\nrounds: 5767"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1406.1876295691904,
            "unit": "iter/sec",
            "range": "stddev: 0.00044005870837635373",
            "extra": "mean: 711.1426519278704 usec\nrounds: 882"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 24.465572624811006,
            "unit": "iter/sec",
            "range": "stddev: 0.0032153738708898265",
            "extra": "mean: 40.87376230000359 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 178.93335569359553,
            "unit": "iter/sec",
            "range": "stddev: 0.0008217564858360009",
            "extra": "mean: 5.588672923076424 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 63.76134504742234,
            "unit": "iter/sec",
            "range": "stddev: 0.0023774195353104153",
            "extra": "mean: 15.683483453121205 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 1364.0646169871952,
            "unit": "iter/sec",
            "range": "stddev: 0.0002646502267126446",
            "extra": "mean: 733.1031005031833 usec\nrounds: 796"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 82.97962378275557,
            "unit": "iter/sec",
            "range": "stddev: 0.0023898136538606125",
            "extra": "mean: 12.051151287670882 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 118.50820918216921,
            "unit": "iter/sec",
            "range": "stddev: 0.0010401799122752636",
            "extra": "mean: 8.43823399999922 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 16.474731758252904,
            "unit": "iter/sec",
            "range": "stddev: 0.003316975166251103",
            "extra": "mean: 60.699015599999484 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5434.02234872566,
            "unit": "iter/sec",
            "range": "stddev: 0.00007031541391715983",
            "extra": "mean: 184.02574296267136 usec\nrounds: 2984"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 66.96834016264454,
            "unit": "iter/sec",
            "range": "stddev: 0.0018261933807138335",
            "extra": "mean: 14.93242922806989 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.4415296493756002,
            "unit": "iter/sec",
            "range": "stddev: 0.05653836105262259",
            "extra": "mean: 2.2648535640000036 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 182.93403053995297,
            "unit": "iter/sec",
            "range": "stddev: 0.000845403447416704",
            "extra": "mean: 5.466451469135476 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 109.1782339930508,
            "unit": "iter/sec",
            "range": "stddev: 0.0010404214967994002",
            "extra": "mean: 9.159334818180428 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1158952.791510591,
            "unit": "iter/sec",
            "range": "stddev: 0.000011557469851127795",
            "extra": "mean: 862.8479152257701 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 125.76757036566566,
            "unit": "iter/sec",
            "range": "stddev: 0.0011355673349020118",
            "extra": "mean: 7.951175307692821 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1439764.5506522388,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022217747679422527",
            "extra": "mean: 694.5580091876706 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 66.16100424142613,
            "unit": "iter/sec",
            "range": "stddev: 0.0023795727082216605",
            "extra": "mean: 15.114643610168462 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8467589.539238624,
            "unit": "iter/sec",
            "range": "stddev: 1.7594775489286406e-7",
            "extra": "mean: 118.09736352540388 nsec\nrounds: 97088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.71243272234563,
            "unit": "iter/sec",
            "range": "stddev: 0.011387834735602677",
            "extra": "mean: 583.9645475999987 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 20.088985043161827,
            "unit": "iter/sec",
            "range": "stddev: 0.0026142353342641094",
            "extra": "mean: 49.778522800005476 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 224.1933299793523,
            "unit": "iter/sec",
            "range": "stddev: 0.0009083926719961058",
            "extra": "mean: 4.460436000000971 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 67.26713038330436,
            "unit": "iter/sec",
            "range": "stddev: 0.0015624651360857114",
            "extra": "mean: 14.866101679999701 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1400.0065828029249,
            "unit": "iter/sec",
            "range": "stddev: 0.00030075841206006715",
            "extra": "mean: 714.2823557285853 usec\nrounds: 1414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.9154624159862004,
            "unit": "iter/sec",
            "range": "stddev: 0.015285666365226897",
            "extra": "mean: 1.0923441340000069 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 67.81568306727597,
            "unit": "iter/sec",
            "range": "stddev: 0.0018947770174692696",
            "extra": "mean: 14.74585161971986 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 23.258044620186336,
            "unit": "iter/sec",
            "range": "stddev: 0.04901689232087272",
            "extra": "mean: 42.99587589285433 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 66.58841196491089,
            "unit": "iter/sec",
            "range": "stddev: 0.0015924758113851235",
            "extra": "mean: 15.017628000003292 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1300.4256389181446,
            "unit": "iter/sec",
            "range": "stddev: 0.0003280902539894191",
            "extra": "mean: 768.9789943175252 usec\nrounds: 880"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 77.53974810682925,
            "unit": "iter/sec",
            "range": "stddev: 0.0008251483898503083",
            "extra": "mean: 12.896611407897078 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09123250967650894,
            "unit": "iter/sec",
            "range": "stddev: 0.22338608921335626",
            "extra": "mean: 10.96100505779998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 69.16483992060762,
            "unit": "iter/sec",
            "range": "stddev: 0.001992102896519601",
            "extra": "mean: 14.458213178081117 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 62.9675361077956,
            "unit": "iter/sec",
            "range": "stddev: 0.0026715006724564614",
            "extra": "mean: 15.881199453128936 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 4021267.3384309052,
            "unit": "iter/sec",
            "range": "stddev: 3.5641883838324745e-7",
            "extra": "mean: 248.6778211542901 nsec\nrounds: 48310"
          }
        ]
      }
    ]
  }
}