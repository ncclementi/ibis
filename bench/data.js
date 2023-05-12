window.BENCHMARK_DATA = {
  "lastUpdate": 1683890083343,
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
          "id": "a8cf7730c3d3448a9975fcc561a9fce3b7d8b7c0",
          "message": "docs(streamlit): fix ibis-framework install",
          "timestamp": "2023-05-12T07:09:39-04:00",
          "tree_id": "2f1cd95c1ffcbfeee6baa3e8ebcc1266bfb0d552",
          "url": "https://github.com/ibis-project/ibis/commit/a8cf7730c3d3448a9975fcc561a9fce3b7d8b7c0"
        },
        "date": 1683890001855,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 90.79084552614111,
            "unit": "iter/sec",
            "range": "stddev: 0.010799753941921038",
            "extra": "mean: 11.014326325577322 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 103.00248967980743,
            "unit": "iter/sec",
            "range": "stddev: 0.0007667872808506177",
            "extra": "mean: 9.708503193549891 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6027788.100600275,
            "unit": "iter/sec",
            "range": "stddev: 9.892807044388814e-9",
            "extra": "mean: 165.8983334033182 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 697.5697965673609,
            "unit": "iter/sec",
            "range": "stddev: 0.00002799379007726526",
            "extra": "mean: 1.4335483057334963 msec\nrounds: 471"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 88.09288152810059,
            "unit": "iter/sec",
            "range": "stddev: 0.010147751778782299",
            "extra": "mean: 11.351655010637968 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 33.70948625394188,
            "unit": "iter/sec",
            "range": "stddev: 0.015854156159046135",
            "extra": "mean: 29.665240000003358 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.2979299208067,
            "unit": "iter/sec",
            "range": "stddev: 0.0007867747043877484",
            "extra": "mean: 9.871870044943524 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 93.83415222713634,
            "unit": "iter/sec",
            "range": "stddev: 0.00015693008745038025",
            "extra": "mean: 10.657100599996738 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 52.43374041438919,
            "unit": "iter/sec",
            "range": "stddev: 0.0005264918430201351",
            "extra": "mean: 19.07168918518683 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2153.747412811563,
            "unit": "iter/sec",
            "range": "stddev: 0.00006502236539020639",
            "extra": "mean: 464.30699999986143 usec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1846008.5848067584,
            "unit": "iter/sec",
            "range": "stddev: 1.5894916526082844e-7",
            "extra": "mean: 541.7092901031556 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1786608.845825522,
            "unit": "iter/sec",
            "range": "stddev: 1.352930234189549e-7",
            "extra": "mean: 559.7196064133104 nsec\nrounds: 133334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2250.5750757842748,
            "unit": "iter/sec",
            "range": "stddev: 0.00008517008048894285",
            "extra": "mean: 444.33087825409353 usec\nrounds: 1191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11599035.098341882,
            "unit": "iter/sec",
            "range": "stddev: 4.454211883913084e-9",
            "extra": "mean: 86.21406793941362 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5529602.371299106,
            "unit": "iter/sec",
            "range": "stddev: 1.189489255630661e-8",
            "extra": "mean: 180.84482985423546 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1228.1291282764523,
            "unit": "iter/sec",
            "range": "stddev: 0.006645673942844736",
            "extra": "mean: 814.2466268212308 usec\nrounds: 343"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.591362548442559,
            "unit": "iter/sec",
            "range": "stddev: 0.00026473487019213176",
            "extra": "mean: 116.39597262500345 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 288.2232682765041,
            "unit": "iter/sec",
            "range": "stddev: 0.0002448501722115905",
            "extra": "mean: 3.469532511999205 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 253.88439624407192,
            "unit": "iter/sec",
            "range": "stddev: 0.0004469962900703442",
            "extra": "mean: 3.938800551722956 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1754.3467252508578,
            "unit": "iter/sec",
            "range": "stddev: 0.000006109852901913626",
            "extra": "mean: 570.0127492511538 usec\nrounds: 1336"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7353.363827250613,
            "unit": "iter/sec",
            "range": "stddev: 0.00010308727188653576",
            "extra": "mean: 135.99218310049199 usec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 274.2863560355682,
            "unit": "iter/sec",
            "range": "stddev: 0.00035570853039423845",
            "extra": "mean: 3.6458248031496128 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4494.350747547523,
            "unit": "iter/sec",
            "range": "stddev: 0.0000305229973515694",
            "extra": "mean: 222.5015483149997 usec\nrounds: 890"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12394.439053133641,
            "unit": "iter/sec",
            "range": "stddev: 0.00001334962130519854",
            "extra": "mean: 80.68134392473159 usec\nrounds: 4469"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 236.45069471001162,
            "unit": "iter/sec",
            "range": "stddev: 0.00032776246210552534",
            "extra": "mean: 4.22921151162792 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 87.18203313015518,
            "unit": "iter/sec",
            "range": "stddev: 0.015030006650225766",
            "extra": "mean: 11.470253263159018 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 58.010893385460456,
            "unit": "iter/sec",
            "range": "stddev: 0.000634719026023022",
            "extra": "mean: 17.238141694446558 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13802.796424796341,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020543348542970045",
            "extra": "mean: 72.44908707075675 usec\nrounds: 5708"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 97.11654733614068,
            "unit": "iter/sec",
            "range": "stddev: 0.0007868682599689301",
            "extra": "mean: 10.296906422535708 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 729.2628481135065,
            "unit": "iter/sec",
            "range": "stddev: 0.000016992311540264316",
            "extra": "mean: 1.3712476956516433 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 99.15894187212507,
            "unit": "iter/sec",
            "range": "stddev: 0.000992285400544827",
            "extra": "mean: 10.084819191491531 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 320.4157123942,
            "unit": "iter/sec",
            "range": "stddev: 0.00003411238681034834",
            "extra": "mean: 3.120945575757918 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.845186286231854,
            "unit": "iter/sec",
            "range": "stddev: 0.0008463180021740877",
            "extra": "mean: 41.93718547618969 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 100.24792486767599,
            "unit": "iter/sec",
            "range": "stddev: 0.0008146443381815972",
            "extra": "mean: 9.975268827957962 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 149.802310968219,
            "unit": "iter/sec",
            "range": "stddev: 0.015399719211122154",
            "extra": "mean: 6.675464440679777 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6012831381546169,
            "unit": "iter/sec",
            "range": "stddev: 0.0013881058210154975",
            "extra": "mean: 624.4991758000026 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2153.714117262081,
            "unit": "iter/sec",
            "range": "stddev: 0.00008409729147226605",
            "extra": "mean: 464.3141779983569 usec\nrounds: 1309"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 280.75745790183197,
            "unit": "iter/sec",
            "range": "stddev: 0.00027822817713010165",
            "extra": "mean: 3.5617931843137507 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 101.14624253899852,
            "unit": "iter/sec",
            "range": "stddev: 0.000883697416249902",
            "extra": "mean: 9.88667472856873 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 166.4814677259013,
            "unit": "iter/sec",
            "range": "stddev: 0.00005472673599314818",
            "extra": "mean: 6.0066745786168925 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2161.837405300291,
            "unit": "iter/sec",
            "range": "stddev: 0.00009073517586698756",
            "extra": "mean: 462.56947795807736 usec\nrounds: 1293"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 282.5004759319861,
            "unit": "iter/sec",
            "range": "stddev: 0.00026167099927833925",
            "extra": "mean: 3.5398170452667017 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 85.38414743694761,
            "unit": "iter/sec",
            "range": "stddev: 0.016964770955308833",
            "extra": "mean: 11.711775897726863 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2138.036503570593,
            "unit": "iter/sec",
            "range": "stddev: 0.00009233102423777535",
            "extra": "mean: 467.718861829518 usec\nrounds: 1585"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 103.28232487197046,
            "unit": "iter/sec",
            "range": "stddev: 0.00026229817554131684",
            "extra": "mean: 9.68219878124943 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4524771.354004198,
            "unit": "iter/sec",
            "range": "stddev: 1.0517517897868685e-8",
            "extra": "mean: 221.0056424436122 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.38020447571514,
            "unit": "iter/sec",
            "range": "stddev: 0.0007120373131530718",
            "extra": "mean: 27.487476071431363 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8391827312435084,
            "unit": "iter/sec",
            "range": "stddev: 0.005534735128025965",
            "extra": "mean: 1.1916355792000046 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.54766368046184,
            "unit": "iter/sec",
            "range": "stddev: 0.00007689182800414201",
            "extra": "mean: 8.964777629629147 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 103.48669598019265,
            "unit": "iter/sec",
            "range": "stddev: 0.000786718933302977",
            "extra": "mean: 9.6630778529387 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 196.17236917207464,
            "unit": "iter/sec",
            "range": "stddev: 0.00021258368385866695",
            "extra": "mean: 5.097557847827384 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2691962.957389447,
            "unit": "iter/sec",
            "range": "stddev: 1.8761702935440936e-8",
            "extra": "mean: 371.47613686720695 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 154.8717575121789,
            "unit": "iter/sec",
            "range": "stddev: 0.00011375840264276866",
            "extra": "mean: 6.456955199990944 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2160.4079467353977,
            "unit": "iter/sec",
            "range": "stddev: 0.00009003325123702089",
            "extra": "mean: 462.87554233037537 usec\nrounds: 1193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 160.37268355158582,
            "unit": "iter/sec",
            "range": "stddev: 0.0035382172588452284",
            "extra": "mean: 6.235475879396492 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1015881.0325409612,
            "unit": "iter/sec",
            "range": "stddev: 2.406953724487653e-7",
            "extra": "mean: 984.3672319570345 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1174.1007538647855,
            "unit": "iter/sec",
            "range": "stddev: 0.000013010448521640397",
            "extra": "mean: 851.7156612908234 usec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.77520038590593,
            "unit": "iter/sec",
            "range": "stddev: 0.0008028507096285028",
            "extra": "mean: 9.454011870000159 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.98748240799678,
            "unit": "iter/sec",
            "range": "stddev: 0.0002441967554814599",
            "extra": "mean: 10.102287437499413 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1715995.0316935705,
            "unit": "iter/sec",
            "range": "stddev: 1.1374600654623608e-7",
            "extra": "mean: 582.7522699835954 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2237.978932129495,
            "unit": "iter/sec",
            "range": "stddev: 0.00010425766120386126",
            "extra": "mean: 446.83173091735677 usec\nrounds: 1297"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.22112875433655,
            "unit": "iter/sec",
            "range": "stddev: 0.0002513535332854704",
            "extra": "mean: 19.149337133333372 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7721854045782827,
            "unit": "iter/sec",
            "range": "stddev: 0.0046802647543917825",
            "extra": "mean: 1.2950257724000038 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 96.59468886650113,
            "unit": "iter/sec",
            "range": "stddev: 0.0008904647030822849",
            "extra": "mean: 10.352536063158212 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10427.417908020047,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038006827140663808",
            "extra": "mean: 95.90101872016363 usec\nrounds: 4594"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 77.34005762854913,
            "unit": "iter/sec",
            "range": "stddev: 0.02365187060803685",
            "extra": "mean: 12.92991020000045 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 175.0132720934566,
            "unit": "iter/sec",
            "range": "stddev: 0.00010125608540809147",
            "extra": "mean: 5.713852372670358 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 274.031782024982,
            "unit": "iter/sec",
            "range": "stddev: 0.00036144077635058325",
            "extra": "mean: 3.6492117542367235 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 44.66467518152734,
            "unit": "iter/sec",
            "range": "stddev: 0.0003800707371177868",
            "extra": "mean: 22.38905792857048 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 535.6298178880164,
            "unit": "iter/sec",
            "range": "stddev: 0.000045228589824928266",
            "extra": "mean: 1.866961036528905 msec\nrounds: 438"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.2853709324362192,
            "unit": "iter/sec",
            "range": "stddev: 0.08032380312372006",
            "extra": "mean: 777.985540800006 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.767822652300257,
            "unit": "iter/sec",
            "range": "stddev: 0.00014662890343401113",
            "extra": "mean: 33.59332026666474 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 85.11507754248505,
            "unit": "iter/sec",
            "range": "stddev: 0.0006274006252474229",
            "extra": "mean: 11.74879972941165 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17232513320695672,
            "unit": "iter/sec",
            "range": "stddev: 0.10776602257925458",
            "extra": "mean: 5.802984053399996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.94223229091212,
            "unit": "iter/sec",
            "range": "stddev: 0.00013798971240105713",
            "extra": "mean: 52.792088315787794 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.841302073520655,
            "unit": "iter/sec",
            "range": "stddev: 0.009128225305439273",
            "extra": "mean: 1.1886337042000037 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 110.45822435158031,
            "unit": "iter/sec",
            "range": "stddev: 0.0000484650998725327",
            "extra": "mean: 9.053196408599458 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 127.46095233724637,
            "unit": "iter/sec",
            "range": "stddev: 0.00008013702869501916",
            "extra": "mean: 7.845540000000316 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 147971.70477422903,
            "unit": "iter/sec",
            "range": "stddev: 4.6664444904661476e-7",
            "extra": "mean: 6.75804878727167 usec\nrounds: 53764"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5354550053948275,
            "unit": "iter/sec",
            "range": "stddev: 0.00401855679659536",
            "extra": "mean: 394.4065258000023 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.71422316926432,
            "unit": "iter/sec",
            "range": "stddev: 0.0008244345749625919",
            "extra": "mean: 9.641879092783388 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.622632969752985,
            "unit": "iter/sec",
            "range": "stddev: 0.03345743325849616",
            "extra": "mean: 28.0720406279091 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.20431153039831,
            "unit": "iter/sec",
            "range": "stddev: 0.0009747375322634406",
            "extra": "mean: 9.979610505049342 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2149.9324758998555,
            "unit": "iter/sec",
            "range": "stddev: 0.00009106123523702619",
            "extra": "mean: 465.1308872300509 usec\nrounds: 1809"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6113436.429035363,
            "unit": "iter/sec",
            "range": "stddev: 8.603966926694156e-9",
            "extra": "mean: 163.57412260789383 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7055691.902447157,
            "unit": "iter/sec",
            "range": "stddev: 4.804490241738539e-9",
            "extra": "mean: 141.72954457567815 nsec\nrounds: 58824"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.30352542776362,
            "unit": "iter/sec",
            "range": "stddev: 0.0009603223464159659",
            "extra": "mean: 9.96973930612417 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 432.174821348558,
            "unit": "iter/sec",
            "range": "stddev: 0.000030288376710166657",
            "extra": "mean: 2.3138784366928196 msec\nrounds: 387"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 286.93853203904104,
            "unit": "iter/sec",
            "range": "stddev: 0.0002604991703671541",
            "extra": "mean: 3.4850669685029936 msec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 287.1652345656357,
            "unit": "iter/sec",
            "range": "stddev: 0.0003243965014300522",
            "extra": "mean: 3.482315683207939 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 242.9540718871127,
            "unit": "iter/sec",
            "range": "stddev: 0.00399130173353175",
            "extra": "mean: 4.116004281108096 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 100.3978541577419,
            "unit": "iter/sec",
            "range": "stddev: 0.0009376032868495873",
            "extra": "mean: 9.960372244897107 msec\nrounds: 98"
          }
        ]
      }
    ]
  }
}