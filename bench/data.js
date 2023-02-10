window.BENCHMARK_DATA = {
  "lastUpdate": 1676034757834,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "d7bf6a27f7c74c91ae3a9682b3d5c88b312dee13",
          "message": "feat(ux): allow creating unbound tables using annotated class definitions\n\nCo-authored-by: Jim Crist-Harif <jcristharif@gmail.com>",
          "timestamp": "2023-02-10T14:04:18+01:00",
          "tree_id": "70bcb2f0f8acbeaafbda4a13ca0ce21ce4ae4384",
          "url": "https://github.com/ibis-project/ibis/commit/d7bf6a27f7c74c91ae3a9682b3d5c88b312dee13"
        },
        "date": 1676034663129,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 102.83582700637871,
            "unit": "iter/sec",
            "range": "stddev: 0.0007697145615756612",
            "extra": "mean: 9.72423744827736 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1250959.5518087905,
            "unit": "iter/sec",
            "range": "stddev: 0.000002862611451995299",
            "extra": "mean: 799.3863578994841 nsec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 148.40432883059384,
            "unit": "iter/sec",
            "range": "stddev: 0.00877984768515715",
            "extra": "mean: 6.738347916667025 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1300464.9308535557,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037467457055887846",
            "extra": "mean: 768.9557605706856 nsec\nrounds: 119034"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.08754408226365488,
            "unit": "iter/sec",
            "range": "stddev: 0.12191723490588167",
            "extra": "mean: 11.422816644400001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 2773.6896162608473,
            "unit": "iter/sec",
            "range": "stddev: 0.00009568396488288636",
            "extra": "mean: 360.5306066466366 usec\nrounds: 361"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7127.322243658421,
            "unit": "iter/sec",
            "range": "stddev: 0.00005504584307205463",
            "extra": "mean: 140.30514768569026 usec\nrounds: 2160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 161.3007445793368,
            "unit": "iter/sec",
            "range": "stddev: 0.0010492007038886114",
            "extra": "mean: 6.199599404255346 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 61.09922361494353,
            "unit": "iter/sec",
            "range": "stddev: 0.0014632188637729126",
            "extra": "mean: 16.366820081088918 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3424.5976629354723,
            "unit": "iter/sec",
            "range": "stddev: 0.00010431123090084934",
            "extra": "mean: 292.0051049567169 usec\nrounds: 343"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3000.7370499136437,
            "unit": "iter/sec",
            "range": "stddev: 0.00008697353861752174",
            "extra": "mean: 333.25145901363743 usec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6416.387842219511,
            "unit": "iter/sec",
            "range": "stddev: 0.000057026007164093265",
            "extra": "mean: 155.85092805956182 usec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 327244.5227645511,
            "unit": "iter/sec",
            "range": "stddev: 0.000001518337457389369",
            "extra": "mean: 3.0558189073785944 usec\nrounds: 1629"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 25.24369827707145,
            "unit": "iter/sec",
            "range": "stddev: 0.00304489000539555",
            "extra": "mean: 39.61384695000447 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 80.85217655071423,
            "unit": "iter/sec",
            "range": "stddev: 0.0011293902053952883",
            "extra": "mean: 12.368250833331043 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 8001.028491744772,
            "unit": "iter/sec",
            "range": "stddev: 0.000054681716707795495",
            "extra": "mean: 124.98393188222875 usec\nrounds: 4272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 88.95724860902435,
            "unit": "iter/sec",
            "range": "stddev: 0.01922300951194351",
            "extra": "mean: 11.241354871429264 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2898.870147461159,
            "unit": "iter/sec",
            "range": "stddev: 0.000246485744687577",
            "extra": "mean: 344.96198488773416 usec\nrounds: 1919"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3643.733661025179,
            "unit": "iter/sec",
            "range": "stddev: 0.00008165233954741408",
            "extra": "mean: 274.44376922945736 usec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 27.572722531299934,
            "unit": "iter/sec",
            "range": "stddev: 0.0022300169895878635",
            "extra": "mean: 36.26772796428871 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 154.31294407539175,
            "unit": "iter/sec",
            "range": "stddev: 0.0006342617987338157",
            "extra": "mean: 6.480337770702087 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9015889.032093046,
            "unit": "iter/sec",
            "range": "stddev: 1.201131999859754e-7",
            "extra": "mean: 110.91529592261205 nsec\nrounds: 105264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3487.396663526413,
            "unit": "iter/sec",
            "range": "stddev: 0.00013378338041470056",
            "extra": "mean: 286.74684771557133 usec\nrounds: 1773"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 70.4072866640251,
            "unit": "iter/sec",
            "range": "stddev: 0.002141721221370049",
            "extra": "mean: 14.20307538297672 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 47.63198511572811,
            "unit": "iter/sec",
            "range": "stddev: 0.0008714010920424547",
            "extra": "mean: 20.994296113638132 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 89.71942860227526,
            "unit": "iter/sec",
            "range": "stddev: 0.02079188648900518",
            "extra": "mean: 11.145857876926339 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.5642303349766056,
            "unit": "iter/sec",
            "range": "stddev: 0.004073743699982017",
            "extra": "mean: 639.2920387999993 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 110.51765030669895,
            "unit": "iter/sec",
            "range": "stddev: 0.0012297736742784382",
            "extra": "mean: 9.048328454548999 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 149.39062071903084,
            "unit": "iter/sec",
            "range": "stddev: 0.0006710260205457382",
            "extra": "mean: 6.6938606666664064 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 39.444116088002886,
            "unit": "iter/sec",
            "range": "stddev: 0.0028018026012438684",
            "extra": "mean: 25.352323722223165 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 56.825725238247806,
            "unit": "iter/sec",
            "range": "stddev: 0.0009230505716693339",
            "extra": "mean: 17.597663660382604 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3354245.071425763,
            "unit": "iter/sec",
            "range": "stddev: 6.835564916648372e-7",
            "extra": "mean: 298.1296770831273 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3453.299494040928,
            "unit": "iter/sec",
            "range": "stddev: 0.00018887299636042727",
            "extra": "mean: 289.57812715798815 usec\nrounds: 1911"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.39922823994445505,
            "unit": "iter/sec",
            "range": "stddev: 0.09532498649223903",
            "extra": "mean: 2.5048328247999962 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 166.2816873793587,
            "unit": "iter/sec",
            "range": "stddev: 0.0005989844201474909",
            "extra": "mean: 6.013891341615857 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 49.25330355505727,
            "unit": "iter/sec",
            "range": "stddev: 0.002385390626009089",
            "extra": "mean: 20.30320664444692 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 65.64247579750719,
            "unit": "iter/sec",
            "range": "stddev: 0.0016798321037545217",
            "extra": "mean: 15.234038446154639 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4135935.276934557,
            "unit": "iter/sec",
            "range": "stddev: 5.316226182018962e-7",
            "extra": "mean: 241.78328069521376 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 100.67365873123423,
            "unit": "iter/sec",
            "range": "stddev: 0.0008870850328655533",
            "extra": "mean: 9.93308490624815 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 376.0566989543599,
            "unit": "iter/sec",
            "range": "stddev: 0.00029499776903642733",
            "extra": "mean: 2.6591734777775224 msec\nrounds: 360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 431227.7033289322,
            "unit": "iter/sec",
            "range": "stddev: 0.00002239291191047982",
            "extra": "mean: 2.318960475591753 usec\nrounds: 12954"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 3586097.9850761215,
            "unit": "iter/sec",
            "range": "stddev: 5.838374949314435e-7",
            "extra": "mean: 278.85462253434645 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5580229392348862,
            "unit": "iter/sec",
            "range": "stddev: 0.028509639168815278",
            "extra": "mean: 1.7920410250000032 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 62.01610217084638,
            "unit": "iter/sec",
            "range": "stddev: 0.0011588672031196917",
            "extra": "mean: 16.12484443548433 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 27.09652013308087,
            "unit": "iter/sec",
            "range": "stddev: 0.0042497137465543015",
            "extra": "mean: 36.90510792856929 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 96306.24762583333,
            "unit": "iter/sec",
            "range": "stddev: 0.000010764634502084876",
            "extra": "mean: 10.383542341771797 usec\nrounds: 29498"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 102.29631358372347,
            "unit": "iter/sec",
            "range": "stddev: 0.001709834202620029",
            "extra": "mean: 9.77552332989555 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 209.49252364007458,
            "unit": "iter/sec",
            "range": "stddev: 0.0006541622739716243",
            "extra": "mean: 4.7734400379752095 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 60.4007425493067,
            "unit": "iter/sec",
            "range": "stddev: 0.0008398220219608706",
            "extra": "mean: 16.556087852457676 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 111.31709408727396,
            "unit": "iter/sec",
            "range": "stddev: 0.0013235997681376786",
            "extra": "mean: 8.983346252427213 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 9.559225754218412,
            "unit": "iter/sec",
            "range": "stddev: 0.006091136380959399",
            "extra": "mean: 104.61098270000662 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 171.4456485676858,
            "unit": "iter/sec",
            "range": "stddev: 0.000619002082847111",
            "extra": "mean: 5.832752294119647 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 46241.300549542655,
            "unit": "iter/sec",
            "range": "stddev: 0.000018741252497334187",
            "extra": "mean: 21.625689332171916 usec\nrounds: 9074"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 166.22825317914976,
            "unit": "iter/sec",
            "range": "stddev: 0.0008547381922861108",
            "extra": "mean: 6.015824511626591 msec\nrounds: 172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 97.80701033713322,
            "unit": "iter/sec",
            "range": "stddev: 0.0019472612539796238",
            "extra": "mean: 10.224215999988928 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 62.286213035908126,
            "unit": "iter/sec",
            "range": "stddev: 0.0014948507616945714",
            "extra": "mean: 16.054917312495753 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 61.744710079221484,
            "unit": "iter/sec",
            "range": "stddev: 0.0009009070112863195",
            "extra": "mean: 16.195719418180943 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 59.891669022987784,
            "unit": "iter/sec",
            "range": "stddev: 0.0016602911479466924",
            "extra": "mean: 16.696813034483597 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 700.2170279134342,
            "unit": "iter/sec",
            "range": "stddev: 0.0003599204493513414",
            "extra": "mean: 1.4281286517408527 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1101.0209547899094,
            "unit": "iter/sec",
            "range": "stddev: 0.00022712264308906178",
            "extra": "mean: 908.2479272075383 usec\nrounds: 838"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12367.233652465324,
            "unit": "iter/sec",
            "range": "stddev: 0.00006448701684213239",
            "extra": "mean: 80.85882648466473 usec\nrounds: 4259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5588163495420662,
            "unit": "iter/sec",
            "range": "stddev: 0.01470884386615827",
            "extra": "mean: 1.789496676000033 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1269122.8084962948,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017617404017522442",
            "extra": "mean: 787.9458105278545 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 19.208689416900278,
            "unit": "iter/sec",
            "range": "stddev: 0.0023083890033837695",
            "extra": "mean: 52.05977244445295 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 296.3287796189612,
            "unit": "iter/sec",
            "range": "stddev: 0.00029604958240359475",
            "extra": "mean: 3.374630035212459 msec\nrounds: 284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.4728820601699672,
            "unit": "iter/sec",
            "range": "stddev: 0.01994332657242186",
            "extra": "mean: 2.114692191200004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 89.42667975808088,
            "unit": "iter/sec",
            "range": "stddev: 0.0010442792190821968",
            "extra": "mean: 11.182345164834734 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 106.91771771797663,
            "unit": "iter/sec",
            "range": "stddev: 0.0004928810556545098",
            "extra": "mean: 9.352986776595445 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 6.348070698071901,
            "unit": "iter/sec",
            "range": "stddev: 0.003933486514596921",
            "extra": "mean: 157.5281762857068 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3240.86677069221,
            "unit": "iter/sec",
            "range": "stddev: 0.00009297384292209466",
            "extra": "mean: 308.5594289290738 usec\nrounds: 1597"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 473.18400333333756,
            "unit": "iter/sec",
            "range": "stddev: 0.000248495177556973",
            "extra": "mean: 2.1133427862216707 msec\nrounds: 421"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 111.1947305412695,
            "unit": "iter/sec",
            "range": "stddev: 0.0015212703663014934",
            "extra": "mean: 8.993231919644375 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 55.8003343609258,
            "unit": "iter/sec",
            "range": "stddev: 0.0006643155134343301",
            "extra": "mean: 17.92103956818313 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.0042139754732655,
            "unit": "iter/sec",
            "range": "stddev: 0.005257628605280771",
            "extra": "mean: 995.8037075999869 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 113.8557809867269,
            "unit": "iter/sec",
            "range": "stddev: 0.0009675991738051987",
            "extra": "mean: 8.7830410659304 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 66.44613895092225,
            "unit": "iter/sec",
            "range": "stddev: 0.0012658367473683783",
            "extra": "mean: 15.04978341538565 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1197708.913319595,
            "unit": "iter/sec",
            "range": "stddev: 0.000006555293334223764",
            "extra": "mean: 834.9274092219781 nsec\nrounds: 151493"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 218.8409306128039,
            "unit": "iter/sec",
            "range": "stddev: 0.00038021121353655246",
            "extra": "mean: 4.5695290967725954 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 173.10847796810103,
            "unit": "iter/sec",
            "range": "stddev: 0.000770011226936653",
            "extra": "mean: 5.776724581821299 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 176.35018349721133,
            "unit": "iter/sec",
            "range": "stddev: 0.001185813906705337",
            "extra": "mean: 5.670535636362484 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 3.3024705091003184,
            "unit": "iter/sec",
            "range": "stddev: 0.013649282428782654",
            "extra": "mean: 302.80361239998683 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 27.854921152896626,
            "unit": "iter/sec",
            "range": "stddev: 0.001384421596218768",
            "extra": "mean: 35.900299071426744 msec\nrounds: 28"
          }
        ]
      }
    ]
  }
}