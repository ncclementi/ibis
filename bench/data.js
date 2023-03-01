window.BENCHMARK_DATA = {
  "lastUpdate": 1677700825077,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "gforsyth@users.noreply.github.com",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "distinct": true,
          "id": "11169f731cfba9689fbe914aad94b1c8e5f83768",
          "message": "docs: bump query engine count in README and use project-preferred names",
          "timestamp": "2023-03-01T14:54:26-05:00",
          "tree_id": "e0afa5044c015c44b14d29831c23ce8ce2f89449",
          "url": "https://github.com/ibis-project/ibis/commit/11169f731cfba9689fbe914aad94b1c8e5f83768"
        },
        "date": 1677700741262,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 85.90818168256149,
            "unit": "iter/sec",
            "range": "stddev: 0.001417323127042164",
            "extra": "mean: 11.640334836734066 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10669.319895902569,
            "unit": "iter/sec",
            "range": "stddev: 0.00004506406163731394",
            "extra": "mean: 93.72668640144894 usec\nrounds: 6486"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 79.10372208669993,
            "unit": "iter/sec",
            "range": "stddev: 0.0016867871450521002",
            "extra": "mean: 12.641630173912318 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 70.88117551799317,
            "unit": "iter/sec",
            "range": "stddev: 0.0021871683272339415",
            "extra": "mean: 14.108118166665426 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 65129.460698588075,
            "unit": "iter/sec",
            "range": "stddev: 0.00002187702870758202",
            "extra": "mean: 15.354034706780224 usec\nrounds: 10776"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4099.704417221003,
            "unit": "iter/sec",
            "range": "stddev: 0.00014567470282083",
            "extra": "mean: 243.9200240386728 usec\nrounds: 416"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 678141.6706366502,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033827333381741032",
            "extra": "mean: 1.4746181267126444 usec\nrounds: 24097"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 50.68905778070446,
            "unit": "iter/sec",
            "range": "stddev: 0.0033485511724793437",
            "extra": "mean: 19.728123657896532 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 225.72621301150517,
            "unit": "iter/sec",
            "range": "stddev: 0.0007782763751646853",
            "extra": "mean: 4.430145647058857 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 129.59612415301473,
            "unit": "iter/sec",
            "range": "stddev: 0.0011152839525670215",
            "extra": "mean: 7.7162801475397185 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1441.2404839517621,
            "unit": "iter/sec",
            "range": "stddev: 0.0002728008198773675",
            "extra": "mean: 693.846732127648 usec\nrounds: 1161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 86.84925158525014,
            "unit": "iter/sec",
            "range": "stddev: 0.0016962235272286184",
            "extra": "mean: 11.514204000001225 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 102.94997869375587,
            "unit": "iter/sec",
            "range": "stddev: 0.0006988565366880496",
            "extra": "mean: 9.713455142858152 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 215.39964530908242,
            "unit": "iter/sec",
            "range": "stddev: 0.0006956842408169305",
            "extra": "mean: 4.642533178571741 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 426096.8731734129,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032517930270790266",
            "extra": "mean: 2.346884154657995 usec\nrounds: 751"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09856300395028487,
            "unit": "iter/sec",
            "range": "stddev: 0.17691626397168372",
            "extra": "mean: 10.14579466859999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6252631828871003,
            "unit": "iter/sec",
            "range": "stddev: 0.028235520698345888",
            "extra": "mean: 1.599326535399996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 642.517082481442,
            "unit": "iter/sec",
            "range": "stddev: 0.0004446664477127775",
            "extra": "mean: 1.5563788532095306 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 32.98718818432983,
            "unit": "iter/sec",
            "range": "stddev: 0.0021922159373704933",
            "extra": "mean: 30.31479962499617 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1964358.8597541102,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010362070696500114",
            "extra": "mean: 509.0719524258289 nsec\nrounds: 105264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 100.49064310853196,
            "unit": "iter/sec",
            "range": "stddev: 0.0011055315365278598",
            "extra": "mean: 9.95117524444519 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 142.05738751106622,
            "unit": "iter/sec",
            "range": "stddev: 0.003710060737285686",
            "extra": "mean: 7.039408632811162 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 35.21819383388514,
            "unit": "iter/sec",
            "range": "stddev: 0.0025298926849741513",
            "extra": "mean: 28.39441468000132 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 248.3151705628356,
            "unit": "iter/sec",
            "range": "stddev: 0.0006030513959272133",
            "extra": "mean: 4.027140177273028 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 175.5567130745836,
            "unit": "iter/sec",
            "range": "stddev: 0.0007205483662963179",
            "extra": "mean: 5.696164974193607 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 119.26044189662372,
            "unit": "iter/sec",
            "range": "stddev: 0.0009444986992353128",
            "extra": "mean: 8.38501001754472 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 116.79196423829382,
            "unit": "iter/sec",
            "range": "stddev: 0.0011826374163000546",
            "extra": "mean: 8.56223291150128 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 214.85408958663766,
            "unit": "iter/sec",
            "range": "stddev: 0.0007295314507168546",
            "extra": "mean: 4.654321460317191 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139165.39915169647,
            "unit": "iter/sec",
            "range": "stddev: 0.000007848112145270626",
            "extra": "mean: 7.185694189041598 usec\nrounds: 21098"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3943.6342037676313,
            "unit": "iter/sec",
            "range": "stddev: 0.00011736419872564148",
            "extra": "mean: 253.5732140279719 usec\nrounds: 1939"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 115.89969292365696,
            "unit": "iter/sec",
            "range": "stddev: 0.0012916380042227366",
            "extra": "mean: 8.628150556522177 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.2812897373113024,
            "unit": "iter/sec",
            "range": "stddev: 0.00750597855520479",
            "extra": "mean: 780.4635991999987 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 121.67982445948054,
            "unit": "iter/sec",
            "range": "stddev: 0.0013455515705651647",
            "extra": "mean: 8.218289305085253 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 124.69469070723973,
            "unit": "iter/sec",
            "range": "stddev: 0.0010840420234040147",
            "extra": "mean: 8.019587637037544 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.906887191839253,
            "unit": "iter/sec",
            "range": "stddev: 0.035076407415899825",
            "extra": "mean: 32.35524800000056 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5453931.102336159,
            "unit": "iter/sec",
            "range": "stddev: 4.36768331855248e-7",
            "extra": "mean: 183.35398471959303 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1926144.5183879444,
            "unit": "iter/sec",
            "range": "stddev: 0.000001021678826989099",
            "extra": "mean: 519.1718432617579 nsec\nrounds: 151516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11264.814980580615,
            "unit": "iter/sec",
            "range": "stddev: 0.000058883225041981576",
            "extra": "mean: 88.77198619985303 usec\nrounds: 4855"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 64.21487553343098,
            "unit": "iter/sec",
            "range": "stddev: 0.0011614727150197647",
            "extra": "mean: 15.57271569387982 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 262.553680337421,
            "unit": "iter/sec",
            "range": "stddev: 0.0006188593176878786",
            "extra": "mean: 3.8087449344257887 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 268.5583641209243,
            "unit": "iter/sec",
            "range": "stddev: 0.0004802424944405768",
            "extra": "mean: 3.7235853862653414 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 14.0080898960451,
            "unit": "iter/sec",
            "range": "stddev: 0.002910445378868479",
            "extra": "mean: 71.38732028571074 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.735493146454679,
            "unit": "iter/sec",
            "range": "stddev: 0.010174022586335651",
            "extra": "mean: 211.17124849999414 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5787113737727833,
            "unit": "iter/sec",
            "range": "stddev: 0.10804253114408206",
            "extra": "mean: 1.7279770975999953 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 119.85542936413832,
            "unit": "iter/sec",
            "range": "stddev: 0.0010280152275872502",
            "extra": "mean: 8.343385070707592 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 47.66000630123137,
            "unit": "iter/sec",
            "range": "stddev: 0.0018794472859775602",
            "extra": "mean: 20.981952744185083 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 250.62761540877315,
            "unit": "iter/sec",
            "range": "stddev: 0.0005053688474896244",
            "extra": "mean: 3.9899833000006883 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 126.1054410541275,
            "unit": "iter/sec",
            "range": "stddev: 0.0007191161437002386",
            "extra": "mean: 7.929871951922962 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 116.95856678298775,
            "unit": "iter/sec",
            "range": "stddev: 0.0014410483076095907",
            "extra": "mean: 8.550036371901363 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 85.81892429082701,
            "unit": "iter/sec",
            "range": "stddev: 0.001464416998584821",
            "extra": "mean: 11.652441559523112 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 188.63714651955638,
            "unit": "iter/sec",
            "range": "stddev: 0.003809736621124263",
            "extra": "mean: 5.301182818180131 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.9434589759971372,
            "unit": "iter/sec",
            "range": "stddev: 0.018108932450486972",
            "extra": "mean: 514.5464927999967 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 75.34370803995216,
            "unit": "iter/sec",
            "range": "stddev: 0.0011769993076244122",
            "extra": "mean: 13.272508428570234 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 118.92860600435715,
            "unit": "iter/sec",
            "range": "stddev: 0.0008816815313397271",
            "extra": "mean: 8.408405963855015 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3798.842337438957,
            "unit": "iter/sec",
            "range": "stddev: 0.00010504624834759926",
            "extra": "mean: 263.23808970555064 usec\nrounds: 2040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3901.5909429929957,
            "unit": "iter/sec",
            "range": "stddev: 0.0001051555797835901",
            "extra": "mean: 256.3057005747707 usec\nrounds: 1740"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10069164.092634613,
            "unit": "iter/sec",
            "range": "stddev: 3.420892948455428e-7",
            "extra": "mean: 99.31310988679135 nsec\nrounds: 40651"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6431.270853303345,
            "unit": "iter/sec",
            "range": "stddev: 0.00007442689795994659",
            "extra": "mean: 155.4902635590852 usec\nrounds: 3153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 190.87527008414892,
            "unit": "iter/sec",
            "range": "stddev: 0.015340160432101275",
            "extra": "mean: 5.239023366196898 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3980.917606738082,
            "unit": "iter/sec",
            "range": "stddev: 0.0000949842289150912",
            "extra": "mean: 251.19836650409562 usec\nrounds: 1648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 81.5266363937092,
            "unit": "iter/sec",
            "range": "stddev: 0.0012863266769602502",
            "extra": "mean: 12.265929814285364 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 91.8548990135689,
            "unit": "iter/sec",
            "range": "stddev: 0.001210088777415998",
            "extra": "mean: 10.886735609521264 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 241.04243755774039,
            "unit": "iter/sec",
            "range": "stddev: 0.0006232818773038562",
            "extra": "mean: 4.1486470603768915 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 119.05486787727783,
            "unit": "iter/sec",
            "range": "stddev: 0.0010579576990598992",
            "extra": "mean: 8.399488553721328 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5642961096696487,
            "unit": "iter/sec",
            "range": "stddev: 0.021592769684777528",
            "extra": "mean: 1.772119252399989 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6058878.429731795,
            "unit": "iter/sec",
            "range": "stddev: 1.6295832235012853e-7",
            "extra": "mean: 165.04704816209403 nsec\nrounds: 58821"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1870561.241927997,
            "unit": "iter/sec",
            "range": "stddev: 0.000001170074119682446",
            "extra": "mean: 534.5989094531302 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 65.41459439518304,
            "unit": "iter/sec",
            "range": "stddev: 0.0008079350813606719",
            "extra": "mean: 15.287108469385192 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 87.3623387098443,
            "unit": "iter/sec",
            "range": "stddev: 0.0014236008615488864",
            "extra": "mean: 11.446580011110857 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.41478102086838,
            "unit": "iter/sec",
            "range": "stddev: 0.003781144427702471",
            "extra": "mean: 46.69671845000494 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 580.0008922295432,
            "unit": "iter/sec",
            "range": "stddev: 0.0003474653920325255",
            "extra": "mean: 1.7241352787509792 msec\nrounds: 513"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 172.52479011099277,
            "unit": "iter/sec",
            "range": "stddev: 0.0005472506962047912",
            "extra": "mean: 5.7962684629649806 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4499.961556946014,
            "unit": "iter/sec",
            "range": "stddev: 0.00010965900379167405",
            "extra": "mean: 222.22412066085948 usec\nrounds: 1815"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10212.934723184082,
            "unit": "iter/sec",
            "range": "stddev: 0.00006514620848841366",
            "extra": "mean: 97.91504862259909 usec\nrounds: 5553"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1433153.5011207664,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026423059162715977",
            "extra": "mean: 697.7619628448535 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 298.75154773906,
            "unit": "iter/sec",
            "range": "stddev: 0.000581377251327047",
            "extra": "mean: 3.3472629935073503 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 4399.119423947838,
            "unit": "iter/sec",
            "range": "stddev: 0.00010398273595956557",
            "extra": "mean: 227.31822067757926 usec\nrounds: 1654"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 83.9344927485641,
            "unit": "iter/sec",
            "range": "stddev: 0.0009223778383058248",
            "extra": "mean: 11.914053057967726 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4952280.5464047445,
            "unit": "iter/sec",
            "range": "stddev: 4.718314211069951e-7",
            "extra": "mean: 201.92717085185646 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1085.8657712810393,
            "unit": "iter/sec",
            "range": "stddev: 0.00013596713458986006",
            "extra": "mean: 920.9241385519133 usec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 249.04427491897167,
            "unit": "iter/sec",
            "range": "stddev: 0.00049764782285858",
            "extra": "mean: 4.015350283901756 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 34.69482061731461,
            "unit": "iter/sec",
            "range": "stddev: 0.002167883727299872",
            "extra": "mean: 28.822745937500116 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 463.7509169468815,
            "unit": "iter/sec",
            "range": "stddev: 0.0003552441126951261",
            "extra": "mean: 2.156329968215548 msec\nrounds: 409"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4229.485304067627,
            "unit": "iter/sec",
            "range": "stddev: 0.00011509702490486993",
            "extra": "mean: 236.43538825829918 usec\nrounds: 2027"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.309713362891172,
            "unit": "iter/sec",
            "range": "stddev: 0.003858465893240106",
            "extra": "mean: 107.41469269999584 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4372.705611477743,
            "unit": "iter/sec",
            "range": "stddev: 0.00008446047667256175",
            "extra": "mean: 228.69136156231033 usec\nrounds: 1972"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.55053280119732,
            "unit": "iter/sec",
            "range": "stddev: 0.01872308869835317",
            "extra": "mean: 9.945248146791444 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5684275580707746,
            "unit": "iter/sec",
            "range": "stddev: 0.04190911664347044",
            "extra": "mean: 1.759239125199997 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}