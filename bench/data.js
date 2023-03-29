window.BENCHMARK_DATA = {
  "lastUpdate": 1680100296242,
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
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "81470d38c9f4dce40ab0757aa9fc73723e6af941",
          "message": "ci: try to fix conda lock generation",
          "timestamp": "2023-03-29T10:22:49-04:00",
          "tree_id": "9fd764ad69b53dca35c22307c81c649784fa59a1",
          "url": "https://github.com/ibis-project/ibis/commit/81470d38c9f4dce40ab0757aa9fc73723e6af941"
        },
        "date": 1680100210473,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5214.676338308038,
            "unit": "iter/sec",
            "range": "stddev: 0.000044505140151275413",
            "extra": "mean: 191.7664558879337 usec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 96.58484602779369,
            "unit": "iter/sec",
            "range": "stddev: 0.0001336672291913267",
            "extra": "mean: 10.353591076929765 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.53264373391664,
            "unit": "iter/sec",
            "range": "stddev: 0.0001051610971090259",
            "extra": "mean: 9.04710107547308 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 305.048646152816,
            "unit": "iter/sec",
            "range": "stddev: 0.00019078877494769245",
            "extra": "mean: 3.2781656716451835 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.97083695478946,
            "unit": "iter/sec",
            "range": "stddev: 0.0002947474098288482",
            "extra": "mean: 20.8459985999923 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1892790.9362796552,
            "unit": "iter/sec",
            "range": "stddev: 1.2333736213806119e-7",
            "extra": "mean: 528.3203658854865 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2532073.757064112,
            "unit": "iter/sec",
            "range": "stddev: 1.9822727229775674e-8",
            "extra": "mean: 394.93320335155164 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17944003454527513,
            "unit": "iter/sec",
            "range": "stddev: 0.06344888277432184",
            "extra": "mean: 5.572892373400021 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 120.82017900983084,
            "unit": "iter/sec",
            "range": "stddev: 0.0005683589798543761",
            "extra": "mean: 8.276763105264331 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 191.63599752720114,
            "unit": "iter/sec",
            "range": "stddev: 0.000033712343293411864",
            "extra": "mean: 5.218226287877142 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.01492945945002,
            "unit": "iter/sec",
            "range": "stddev: 0.00032589809423497055",
            "extra": "mean: 17.852383456519636 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2560683.666160499,
            "unit": "iter/sec",
            "range": "stddev: 1.744370352262812e-8",
            "extra": "mean: 390.5207086742987 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1698061.71946316,
            "unit": "iter/sec",
            "range": "stddev: 1.1374084719278541e-7",
            "extra": "mean: 588.9067449893097 nsec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 106.08816738075976,
            "unit": "iter/sec",
            "range": "stddev: 0.0005033587388036211",
            "extra": "mean: 9.426121919996149 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5746.869718277065,
            "unit": "iter/sec",
            "range": "stddev: 0.00004476331751033553",
            "extra": "mean: 174.007772756645 usec\nrounds: 3098"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.0653126154431,
            "unit": "iter/sec",
            "range": "stddev: 0.0005491204028278892",
            "extra": "mean: 9.609349886790248 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.88072555131029,
            "unit": "iter/sec",
            "range": "stddev: 0.00045215913517134866",
            "extra": "mean: 15.412897921573947 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6329606.899151371,
            "unit": "iter/sec",
            "range": "stddev: 1.0030583200021449e-8",
            "extra": "mean: 157.98769432808774 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 71.6248673023111,
            "unit": "iter/sec",
            "range": "stddev: 0.00015305764622635838",
            "extra": "mean: 13.961631450976988 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 120.22922231559225,
            "unit": "iter/sec",
            "range": "stddev: 0.0006660551261385553",
            "extra": "mean: 8.317445465754394 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 119.17201168791323,
            "unit": "iter/sec",
            "range": "stddev: 0.0006647528131319505",
            "extra": "mean: 8.39123201695036 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.58746642658163,
            "unit": "iter/sec",
            "range": "stddev: 0.0013174438811770826",
            "extra": "mean: 386.4784446000044 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 100.71644011552516,
            "unit": "iter/sec",
            "range": "stddev: 0.000659804915917733",
            "extra": "mean: 9.928865623655543 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10968366.42632374,
            "unit": "iter/sec",
            "range": "stddev: 3.698991972097694e-9",
            "extra": "mean: 91.17127939865523 nsec\nrounds: 93458"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 308.0118259375391,
            "unit": "iter/sec",
            "range": "stddev: 0.00021098259510087677",
            "extra": "mean: 3.246628589523012 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 114.4102401890171,
            "unit": "iter/sec",
            "range": "stddev: 0.0006594816434032881",
            "extra": "mean: 8.74047636249955 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1746.2951064488432,
            "unit": "iter/sec",
            "range": "stddev: 0.000004913679608035489",
            "extra": "mean: 572.6408991854404 usec\nrounds: 1349"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 293.825173441008,
            "unit": "iter/sec",
            "range": "stddev: 0.00022218161510889934",
            "extra": "mean: 3.403384360464855 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5678.72096902099,
            "unit": "iter/sec",
            "range": "stddev: 0.00004438487210145137",
            "extra": "mean: 176.09599158952858 usec\nrounds: 2259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5214.418306158579,
            "unit": "iter/sec",
            "range": "stddev: 0.000047373595155686156",
            "extra": "mean: 191.77594532815533 usec\nrounds: 3018"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.347383453203946,
            "unit": "iter/sec",
            "range": "stddev: 0.0004869405968066728",
            "extra": "mean: 37.95443300000236 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 94.67471513898428,
            "unit": "iter/sec",
            "range": "stddev: 0.00006640944969239738",
            "extra": "mean: 10.562482269230818 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 107.1745383670321,
            "unit": "iter/sec",
            "range": "stddev: 0.0001578713841877061",
            "extra": "mean: 9.330574362498112 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 73.96406863469704,
            "unit": "iter/sec",
            "range": "stddev: 0.00005022148616134316",
            "extra": "mean: 13.520078309089843 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 105.68217454310115,
            "unit": "iter/sec",
            "range": "stddev: 0.012143478534017852",
            "extra": "mean: 9.462333684212396 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 306.77808314337426,
            "unit": "iter/sec",
            "range": "stddev: 0.00023073469046421701",
            "extra": "mean: 3.2596852739726034 msec\nrounds: 292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13402.014756079068,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018415787257088544",
            "extra": "mean: 74.61564684118903 usec\nrounds: 7028"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 292.5725496202901,
            "unit": "iter/sec",
            "range": "stddev: 0.0002441085391610661",
            "extra": "mean: 3.4179556533852256 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 91.35640107046692,
            "unit": "iter/sec",
            "range": "stddev: 0.0006940354182062652",
            "extra": "mean: 10.946140481482617 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.850999722203742,
            "unit": "iter/sec",
            "range": "stddev: 0.0016241766083018607",
            "extra": "mean: 1.175088515199991 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5681.801611472187,
            "unit": "iter/sec",
            "range": "stddev: 0.00004549523804424687",
            "extra": "mean: 176.00051328453446 usec\nrounds: 2823"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 157.01784035111643,
            "unit": "iter/sec",
            "range": "stddev: 0.000121591587635963",
            "extra": "mean: 6.368703057969997 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.98808658366961,
            "unit": "iter/sec",
            "range": "stddev: 0.0007702983433829055",
            "extra": "mean: 22.228106948718143 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 106.37955907534025,
            "unit": "iter/sec",
            "range": "stddev: 0.000576445446217191",
            "extra": "mean: 9.400302169816092 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 495616.8058715375,
            "unit": "iter/sec",
            "range": "stddev: 2.483767274948192e-7",
            "extra": "mean: 2.0176878349423797 usec\nrounds: 2047"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.31211504917769,
            "unit": "iter/sec",
            "range": "stddev: 0.0006243625722612846",
            "extra": "mean: 8.825181663637625 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 773379.7688072759,
            "unit": "iter/sec",
            "range": "stddev: 2.2799349456643506e-7",
            "extra": "mean: 1.293025807414413 usec\nrounds: 23753"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 748.7447479975316,
            "unit": "iter/sec",
            "range": "stddev: 0.000009240049238676926",
            "extra": "mean: 1.3355686336023511 msec\nrounds: 494"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6758543036028003,
            "unit": "iter/sec",
            "range": "stddev: 0.0016418513426090956",
            "extra": "mean: 1.47960883679998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7369336.458050483,
            "unit": "iter/sec",
            "range": "stddev: 4.8528701064563635e-9",
            "extra": "mean: 135.69742753534626 nsec\nrounds: 31153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5481.475724855762,
            "unit": "iter/sec",
            "range": "stddev: 0.00004380896793201956",
            "extra": "mean: 182.43262402230448 usec\nrounds: 2173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5563.563095457209,
            "unit": "iter/sec",
            "range": "stddev: 0.0000446321225579211",
            "extra": "mean: 179.7409291208588 usec\nrounds: 2991"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 278.41496416496676,
            "unit": "iter/sec",
            "range": "stddev: 0.00027873174520370414",
            "extra": "mean: 3.591760963708398 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.16840913737187,
            "unit": "iter/sec",
            "range": "stddev: 0.000057324616843250444",
            "extra": "mean: 6.128637309677376 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 105.46650416888764,
            "unit": "iter/sec",
            "range": "stddev: 0.011933756443898607",
            "extra": "mean: 9.481683382608955 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 100.04383226553499,
            "unit": "iter/sec",
            "range": "stddev: 0.0007022581554559883",
            "extra": "mean: 9.995618693872236 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 140450.72995667433,
            "unit": "iter/sec",
            "range": "stddev: 3.73908183944096e-7",
            "extra": "mean: 7.119934515886645 usec\nrounds: 40651"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.514699014322372,
            "unit": "iter/sec",
            "range": "stddev: 0.00019699156055056924",
            "extra": "mean: 181.33355916666952 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9136157914630582,
            "unit": "iter/sec",
            "range": "stddev: 0.0028419464856953747",
            "extra": "mean: 1.0945520089999832 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5928683.045867074,
            "unit": "iter/sec",
            "range": "stddev: 1.0233137825869092e-8",
            "extra": "mean: 168.67152321449706 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 304.9706570336215,
            "unit": "iter/sec",
            "range": "stddev: 0.0002690857571411757",
            "extra": "mean: 3.2790039859138154 msec\nrounds: 284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 138.59623192047619,
            "unit": "iter/sec",
            "range": "stddev: 0.000372265432000235",
            "extra": "mean: 7.215203372727914 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.073520015588706,
            "unit": "iter/sec",
            "range": "stddev: 0.024885749906226065",
            "extra": "mean: 26.973430081079947 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.466473853873758,
            "unit": "iter/sec",
            "range": "stddev: 0.00005524835123886395",
            "extra": "mean: 64.65597843748583 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 353.72383327950627,
            "unit": "iter/sec",
            "range": "stddev: 0.00003055235042993992",
            "extra": "mean: 2.8270642402821013 msec\nrounds: 283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 301.02411924399877,
            "unit": "iter/sec",
            "range": "stddev: 0.00022540834129529744",
            "extra": "mean: 3.3219929436598994 msec\nrounds: 284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 660.6248043993614,
            "unit": "iter/sec",
            "range": "stddev: 0.00007067516280045248",
            "extra": "mean: 1.5137185181976291 msec\nrounds: 577"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7638594603588058,
            "unit": "iter/sec",
            "range": "stddev: 0.0010798149347102121",
            "extra": "mean: 566.9385925999904 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11297.62761009439,
            "unit": "iter/sec",
            "range": "stddev: 0.00001156685817009937",
            "extra": "mean: 88.5141584155689 usec\nrounds: 4949"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9106940269678929,
            "unit": "iter/sec",
            "range": "stddev: 0.00214945895048929",
            "extra": "mean: 1.0980636419999883 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 69582.58294307138,
            "unit": "iter/sec",
            "range": "stddev: 5.351689081750896e-7",
            "extra": "mean: 14.37141246708454 usec\nrounds: 14246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 169.36872690218402,
            "unit": "iter/sec",
            "range": "stddev: 0.003814723454094695",
            "extra": "mean: 5.904277715788303 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 532.3016691423287,
            "unit": "iter/sec",
            "range": "stddev: 0.00003832142807463162",
            "extra": "mean: 1.8786339738728424 msec\nrounds: 421"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 233.9623827020677,
            "unit": "iter/sec",
            "range": "stddev: 0.0041952317056002456",
            "extra": "mean: 4.274191382609655 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5550.150718114068,
            "unit": "iter/sec",
            "range": "stddev: 0.00004489158967695012",
            "extra": "mean: 180.17528726495527 usec\nrounds: 2395"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 119.6544071271423,
            "unit": "iter/sec",
            "range": "stddev: 0.0007038673996756154",
            "extra": "mean: 8.357402155170268 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1159.5330665921251,
            "unit": "iter/sec",
            "range": "stddev: 0.00012370336077130095",
            "extra": "mean: 862.4161128401506 usec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.6140807610812,
            "unit": "iter/sec",
            "range": "stddev: 0.029981559388808386",
            "extra": "mean: 27.311896931820456 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 116.93381498129794,
            "unit": "iter/sec",
            "range": "stddev: 0.0001068968930549039",
            "extra": "mean: 8.551846188888451 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 100.56841245989847,
            "unit": "iter/sec",
            "range": "stddev: 0.000613597047239638",
            "extra": "mean: 9.943480020615308 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.377545080785808,
            "unit": "iter/sec",
            "range": "stddev: 0.00025993070799484966",
            "extra": "mean: 96.36190372726166 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 296.12366099289966,
            "unit": "iter/sec",
            "range": "stddev: 0.00008443726482933653",
            "extra": "mean: 3.3769675703961317 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7904.801207235518,
            "unit": "iter/sec",
            "range": "stddev: 0.000012021657592785682",
            "extra": "mean: 126.5053951116023 usec\nrounds: 3928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 104.72684841908668,
            "unit": "iter/sec",
            "range": "stddev: 0.0006517239595478016",
            "extra": "mean: 9.548649797980056 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 151.35557372903415,
            "unit": "iter/sec",
            "range": "stddev: 0.00006738803707647644",
            "extra": "mean: 6.606958537187802 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5568.795770832475,
            "unit": "iter/sec",
            "range": "stddev: 0.00003296750816067722",
            "extra": "mean: 179.5720369631208 usec\nrounds: 2516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 316.7568601448029,
            "unit": "iter/sec",
            "range": "stddev: 0.00012372791794501497",
            "extra": "mean: 3.1569955566009145 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11844.12583843398,
            "unit": "iter/sec",
            "range": "stddev: 0.00000803658013665215",
            "extra": "mean: 84.43003845459137 usec\nrounds: 5565"
          }
        ]
      }
    ]
  }
}