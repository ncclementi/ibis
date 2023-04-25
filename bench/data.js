window.BENCHMARK_DATA = {
  "lastUpdate": 1682432143155,
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
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "b15a6feb64fc519d5df9bbb59c8ec3443298e6ef",
          "message": "feat(snowflake): implement proper approx median",
          "timestamp": "2023-04-25T16:07:46+02:00",
          "tree_id": "c5edf8ee17b7d3ea12be308061429a6a6997929b",
          "url": "https://github.com/ibis-project/ibis/commit/b15a6feb64fc519d5df9bbb59c8ec3443298e6ef"
        },
        "date": 1682432062353,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6990285.665046574,
            "unit": "iter/sec",
            "range": "stddev: 1.0945736389092738e-8",
            "extra": "mean: 143.05567009952748 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 286.0768550305563,
            "unit": "iter/sec",
            "range": "stddev: 0.0002924916366965428",
            "extra": "mean: 3.495564154930284 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.631088819228822,
            "unit": "iter/sec",
            "range": "stddev: 0.00010016366372367846",
            "extra": "mean: 115.86023744445129 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 190.5921751212999,
            "unit": "iter/sec",
            "range": "stddev: 0.00005342759558546742",
            "extra": "mean: 5.246805118644367 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 96.78936557752125,
            "unit": "iter/sec",
            "range": "stddev: 0.0007547541088409983",
            "extra": "mean: 10.331713551723539 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.534092557278004,
            "unit": "iter/sec",
            "range": "stddev: 0.0011768210415863754",
            "extra": "mean: 42.49154700000304 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 103.03901045116162,
            "unit": "iter/sec",
            "range": "stddev: 0.0007585445626967424",
            "extra": "mean: 9.705062147059143 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 255.25767502588639,
            "unit": "iter/sec",
            "range": "stddev: 0.00043920493056757434",
            "extra": "mean: 3.917609920636421 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2139.761163153891,
            "unit": "iter/sec",
            "range": "stddev: 0.00009935809851525469",
            "extra": "mean: 467.3418777851144 usec\nrounds: 1571"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 145890.78415921645,
            "unit": "iter/sec",
            "range": "stddev: 3.420407429571048e-7",
            "extra": "mean: 6.854442559638723 usec\nrounds: 34723"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2228.5971853233955,
            "unit": "iter/sec",
            "range": "stddev: 0.00009732649437899955",
            "extra": "mean: 448.7127627126067 usec\nrounds: 472"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 90.00074496709522,
            "unit": "iter/sec",
            "range": "stddev: 0.059136468431431714",
            "extra": "mean: 11.111019140626066 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.11868334927239,
            "unit": "iter/sec",
            "range": "stddev: 0.0007948528772486697",
            "extra": "mean: 23.19180277142842 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 79.01857869018048,
            "unit": "iter/sec",
            "range": "stddev: 0.02238908756208465",
            "extra": "mean: 12.655251670886717 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9456977855689543,
            "unit": "iter/sec",
            "range": "stddev: 0.0035824462485828513",
            "extra": "mean: 1.057420261799996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.573596471740891,
            "unit": "iter/sec",
            "range": "stddev: 0.0023667589394232324",
            "extra": "mean: 388.5613035999995 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14129.570967292902,
            "unit": "iter/sec",
            "range": "stddev: 0.000001699737754700091",
            "extra": "mean: 70.7735572661617 usec\nrounds: 5911"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2077.823943469041,
            "unit": "iter/sec",
            "range": "stddev: 0.00010405291274610176",
            "extra": "mean: 481.2727291660934 usec\nrounds: 288"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10474.363618894618,
            "unit": "iter/sec",
            "range": "stddev: 0.000004086361026802837",
            "extra": "mean: 95.47119389631541 usec\nrounds: 4358"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3570494273140765,
            "unit": "iter/sec",
            "range": "stddev: 0.0008541881579587756",
            "extra": "mean: 736.8928351999955 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1674639866825229,
            "unit": "iter/sec",
            "range": "stddev: 0.18803998564147908",
            "extra": "mean: 5.971433141 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 312.43327086502165,
            "unit": "iter/sec",
            "range": "stddev: 0.00005168811452187681",
            "extra": "mean: 3.2006834522819534 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 178.01020101273522,
            "unit": "iter/sec",
            "range": "stddev: 0.00005845582716912982",
            "extra": "mean: 5.617655585527134 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6838.515299966583,
            "unit": "iter/sec",
            "range": "stddev: 0.00005482802490688508",
            "extra": "mean: 146.23057142314013 usec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.17666005109845,
            "unit": "iter/sec",
            "range": "stddev: 0.0007521210564467152",
            "extra": "mean: 9.59907909803887 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9371091.933531137,
            "unit": "iter/sec",
            "range": "stddev: 5.390131265033159e-9",
            "extra": "mean: 106.71115032196059 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5557533.892411749,
            "unit": "iter/sec",
            "range": "stddev: 1.2205220719841793e-8",
            "extra": "mean: 179.935924702828 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2200.7742749872714,
            "unit": "iter/sec",
            "range": "stddev: 0.00008416894952543949",
            "extra": "mean: 454.38553665654047 usec\nrounds: 1023"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 155.98704483924314,
            "unit": "iter/sec",
            "range": "stddev: 0.00022978665726991788",
            "extra": "mean: 6.410788799996681 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 127.28839878902906,
            "unit": "iter/sec",
            "range": "stddev: 0.0000786401564975793",
            "extra": "mean: 7.856175499995288 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 271.6088772438584,
            "unit": "iter/sec",
            "range": "stddev: 0.0003636384979232078",
            "extra": "mean: 3.6817647867310717 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1777.3964895298848,
            "unit": "iter/sec",
            "range": "stddev: 0.000014986235740878099",
            "extra": "mean: 562.6206678648816 usec\nrounds: 1391"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1895672.4274642663,
            "unit": "iter/sec",
            "range": "stddev: 1.2625295830216131e-7",
            "extra": "mean: 527.5172996727306 nsec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 130.85398319071498,
            "unit": "iter/sec",
            "range": "stddev: 0.0004910122513210698",
            "extra": "mean: 7.642105923077144 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12580.422932344714,
            "unit": "iter/sec",
            "range": "stddev: 0.000012119102818545345",
            "extra": "mean: 79.4885836015071 usec\nrounds: 4354"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6276253.895331691,
            "unit": "iter/sec",
            "range": "stddev: 5.093079317678974e-9",
            "extra": "mean: 159.33071170745686 nsec\nrounds: 44053"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1031098.8376326702,
            "unit": "iter/sec",
            "range": "stddev: 1.238844005871088e-7",
            "extra": "mean: 969.8391303552713 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1537588.848676188,
            "unit": "iter/sec",
            "range": "stddev: 2.2417647764095895e-7",
            "extra": "mean: 650.368920703975 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9385234933630606,
            "unit": "iter/sec",
            "range": "stddev: 0.0037009047317312954",
            "extra": "mean: 1.0655034286000102 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.55126458568446,
            "unit": "iter/sec",
            "range": "stddev: 0.0003097817627650071",
            "extra": "mean: 19.02903779545604 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 25.012688981783533,
            "unit": "iter/sec",
            "range": "stddev: 0.0360245272894258",
            "extra": "mean: 39.97970792857534 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 152.58530832971834,
            "unit": "iter/sec",
            "range": "stddev: 0.0040203967377545015",
            "extra": "mean: 6.553710910614811 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 105.82446198049881,
            "unit": "iter/sec",
            "range": "stddev: 0.00007618308632741632",
            "extra": "mean: 9.449610999999969 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 291.2218489689041,
            "unit": "iter/sec",
            "range": "stddev: 0.0002313222222160031",
            "extra": "mean: 3.433808292683347 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6108726.467028181,
            "unit": "iter/sec",
            "range": "stddev: 1.0565987275319021e-8",
            "extra": "mean: 163.70024184183768 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 538.1572029424368,
            "unit": "iter/sec",
            "range": "stddev: 0.00013541634567403423",
            "extra": "mean: 1.8581930977275491 msec\nrounds: 440"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 98.5747855080902,
            "unit": "iter/sec",
            "range": "stddev: 0.00036047570086616645",
            "extra": "mean: 10.144582053571176 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2165.9135527661883,
            "unit": "iter/sec",
            "range": "stddev: 0.00012248018612023325",
            "extra": "mean: 461.6989439503962 usec\nrounds: 1124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4605.270737675196,
            "unit": "iter/sec",
            "range": "stddev: 0.00002517766038745654",
            "extra": "mean: 217.14249974906227 usec\nrounds: 1991"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 166.60218710810753,
            "unit": "iter/sec",
            "range": "stddev: 0.00005321669675529084",
            "extra": "mean: 6.002322162500207 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 276.14243500435424,
            "unit": "iter/sec",
            "range": "stddev: 0.00024538099569730077",
            "extra": "mean: 3.6213195555555666 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 53.52074436418069,
            "unit": "iter/sec",
            "range": "stddev: 0.000593628114323388",
            "extra": "mean: 18.684344021740856 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 93.89085440611892,
            "unit": "iter/sec",
            "range": "stddev: 0.0007172047616218033",
            "extra": "mean: 10.650664607593873 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2212.0503077649587,
            "unit": "iter/sec",
            "range": "stddev: 0.00011018962469258901",
            "extra": "mean: 452.06928454099835 usec\nrounds: 1339"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6199273341938618,
            "unit": "iter/sec",
            "range": "stddev: 0.0021588800905670722",
            "extra": "mean: 617.3116403999927 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 79.95454058481867,
            "unit": "iter/sec",
            "range": "stddev: 0.024371881777896346",
            "extra": "mean: 12.507107072163885 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.39746406618093,
            "unit": "iter/sec",
            "range": "stddev: 0.0007991589303173374",
            "extra": "mean: 9.765866851484581 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.73025547866845,
            "unit": "iter/sec",
            "range": "stddev: 0.000782261412304522",
            "extra": "mean: 9.82991731707277 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.44735487419334,
            "unit": "iter/sec",
            "range": "stddev: 0.00032377613597881096",
            "extra": "mean: 21.07599048780485 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4521972.7075060755,
            "unit": "iter/sec",
            "range": "stddev: 1.3246961593287671e-8",
            "extra": "mean: 221.14242271753412 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7729644913205131,
            "unit": "iter/sec",
            "range": "stddev: 0.001422274854159454",
            "extra": "mean: 1.2937204894000047 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.13849447124082,
            "unit": "iter/sec",
            "range": "stddev: 0.00008464674843271946",
            "extra": "mean: 52.25071394736341 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2200.336005269131,
            "unit": "iter/sec",
            "range": "stddev: 0.00008386705183261124",
            "extra": "mean: 454.47604257045566 usec\nrounds: 1198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1166.6918638978727,
            "unit": "iter/sec",
            "range": "stddev: 0.00001131926776719698",
            "extra": "mean: 857.1243452911709 usec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 100.71117068586732,
            "unit": "iter/sec",
            "range": "stddev: 0.0008683799226471421",
            "extra": "mean: 9.929385123713281 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 102.10153316797312,
            "unit": "iter/sec",
            "range": "stddev: 0.0007350244723521114",
            "extra": "mean: 9.794172222221604 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 227.28356989880942,
            "unit": "iter/sec",
            "range": "stddev: 0.015429068615574516",
            "extra": "mean: 4.39979009677302 msec\nrounds: 279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1940519.0079470847,
            "unit": "iter/sec",
            "range": "stddev: 9.643705983231593e-8",
            "extra": "mean: 515.3260524141533 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 109.99185163800419,
            "unit": "iter/sec",
            "range": "stddev: 0.000038183374282056455",
            "extra": "mean: 9.091582559143697 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 107.70654434336087,
            "unit": "iter/sec",
            "range": "stddev: 0.0007111515571892062",
            "extra": "mean: 9.284486899998114 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.27745453739774,
            "unit": "iter/sec",
            "range": "stddev: 0.0009399528284175919",
            "extra": "mean: 9.972331314284183 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 61.69118042835094,
            "unit": "iter/sec",
            "range": "stddev: 0.0008159279843693979",
            "extra": "mean: 16.209772499999655 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 94.93109953365067,
            "unit": "iter/sec",
            "range": "stddev: 0.0009621815664695061",
            "extra": "mean: 10.533955731182965 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 105.86224492200864,
            "unit": "iter/sec",
            "range": "stddev: 0.0001864099280839802",
            "extra": "mean: 9.446238370787668 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.75560880489454,
            "unit": "iter/sec",
            "range": "stddev: 0.0009009304499589626",
            "extra": "mean: 10.443252489131323 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.35765030410634,
            "unit": "iter/sec",
            "range": "stddev: 0.0001328876599077769",
            "extra": "mean: 8.98007453703542 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 82.57918467575986,
            "unit": "iter/sec",
            "range": "stddev: 0.027390141924856767",
            "extra": "mean: 12.109589164950162 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.76901748731788,
            "unit": "iter/sec",
            "range": "stddev: 0.0012779298195212776",
            "extra": "mean: 24.528430205880543 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 426.53857255921116,
            "unit": "iter/sec",
            "range": "stddev: 0.00002983531973126982",
            "extra": "mean: 2.344453853258915 msec\nrounds: 368"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.02877368556562,
            "unit": "iter/sec",
            "range": "stddev: 0.038240294275637035",
            "extra": "mean: 28.547959142859522 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 279.07105188376016,
            "unit": "iter/sec",
            "range": "stddev: 0.00031236935362784934",
            "extra": "mean: 3.5833168408184606 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 682.3754407730155,
            "unit": "iter/sec",
            "range": "stddev: 0.00005228360517198126",
            "extra": "mean: 1.4654689196715078 msec\nrounds: 610"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 197.33577975728792,
            "unit": "iter/sec",
            "range": "stddev: 0.0000322405764870237",
            "extra": "mean: 5.067504743589554 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 280.8642682486877,
            "unit": "iter/sec",
            "range": "stddev: 0.0002672404006192221",
            "extra": "mean: 3.5604386639690406 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.7828296313058,
            "unit": "iter/sec",
            "range": "stddev: 0.0008857846809266755",
            "extra": "mean: 9.922325099010454 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1929315.7996580033,
            "unit": "iter/sec",
            "range": "stddev: 8.021384177241964e-8",
            "extra": "mean: 518.3184630412829 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 752.8054761958814,
            "unit": "iter/sec",
            "range": "stddev: 0.00008891715133223921",
            "extra": "mean: 1.3283644070354743 msec\nrounds: 597"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2178.941742621879,
            "unit": "iter/sec",
            "range": "stddev: 0.00008004624737652681",
            "extra": "mean: 458.93838299537055 usec\nrounds: 1282"
          }
        ]
      }
    ]
  }
}